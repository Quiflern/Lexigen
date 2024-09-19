import Stripe from "stripe";
import { prismadb } from "@/lib/prismadb";
import { auth, currentUser } from "@clerk/nextjs/server";
import { NextResponse } from "next/server";

// Initialize Stripe with the secret key and API version
const stripe = new Stripe(process.env.STRIPE_SECRET_KEY as string, {
  apiVersion: "2024-06-20",
});

// Define the available plans and their details
type PlanKey = "bronze" | "silver" | "gold" | "diamond" | "ruby" | "platinum";

const plans: Record<PlanKey, { credits: number; price: number }> = {
  bronze: { credits: 10000, price: 999 }, // 9.99 USD in cents
  silver: { credits: 50000, price: 4999 }, // 49.99 USD in cents
  gold: { credits: 100000, price: 9999 }, // 99.99 USD in cents
  diamond: { credits: 250000, price: 24999 }, // 249.99 USD in cents
  ruby: { credits: 500000, price: 49999 }, // 499.99 USD in cents
  platinum: { credits: 1000000, price: 99999 }, // 999.99 USD in cents
};

// Handle POST request for creating a checkout session
export async function POST(req: Request) {
  try {
    // Authenticate user and get current user details
    const { userId } = auth();
    const user = await currentUser();
    const body = await req.json();
    const { plan } = body as { plan: PlanKey };

    // Check if user is authenticated
    if (!userId || !user) {
      return new NextResponse("Unauthorized", { status: 401 });
    }

    // Validate the plan
    if (!plan || !(plan in plans)) {
      return new NextResponse("Invalid plan", { status: 400 });
    }

    const { credits, price } = plans[plan];

    // Create line items for the Stripe checkout session
    const line_items: Stripe.Checkout.SessionCreateParams.LineItem[] = [
      {
        quantity: 1,
        price_data: {
          currency: "USD",
          product_data: {
            name: `${credits.toLocaleString()} AI Credits`,
            description: `${plan.charAt(0).toUpperCase() + plan.slice(1)} plan`,
          },
          unit_amount: price,
        },
      },
    ];

    // Record the purchase in the database
    let purchase = await prismadb.purchase.create({
      data: {
        userId: userId,
        credit: credits,
      },
    });

    // Check if the user already has a Stripe customer ID
    let stripeCustomer = await prismadb.stripeCustomer.findUnique({
      where: {
        userId: userId,
      },
      select: {
        stripeCustomerId: true,
      },
    });

    // Create a new Stripe customer if not found
    if (!stripeCustomer) {
      const customer = await stripe.customers.create({
        email: user.emailAddresses[0].emailAddress,
      });

      stripeCustomer = await prismadb.stripeCustomer.create({
        data: {
          userId: userId,
          stripeCustomerId: customer.id,
        },
      });
    }

    // Create a Stripe checkout session
    const session = await stripe.checkout.sessions.create({
      customer: stripeCustomer.stripeCustomerId,
      line_items,
      mode: "payment",
      success_url: `https://localhost:3000/dashboard/`,
      cancel_url: `https://localhost:3000/`,
      metadata: {
        userId: userId,
        purchaseId: purchase.id,
      },
    });

    // Return the checkout session URL
    return NextResponse.json({ url: session.url });
  } catch (error) {
    console.error("Checkout error:", error);
    return new NextResponse("Internal Error", { status: 500 });
  }
}
