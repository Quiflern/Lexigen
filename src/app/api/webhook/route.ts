import { prismadb } from "@/lib/prismadb";
import { headers } from "next/headers";
import { NextResponse } from "next/server";
import Stripe from "stripe";

const stripe = new Stripe(process.env.STRIPE_SECRET_KEY as string, {
  apiVersion: "2024-06-20",
});

export async function POST(req: Request) {
  const body = await req.text();
  const sig = headers().get("stripe-signature");

  let event;

  try {
    event = stripe.webhooks.constructEvent(
      body,
      sig!,
      process.env.STRIPE_WEBHOOK_SECRET_KEY!
    );
  } catch (error) {
    return NextResponse.json({ error: "Invalid Signature" }, { status: 400 });
  }

  const session = event.data.object as Stripe.Checkout.Session;
  const userId = session?.metadata?.userId;
  const purchaseId = session?.metadata?.purchaseId;

  if (event.type === "checkout.session.completed") {
    if (!userId || !purchaseId) {
      return new NextResponse("Invalid session", { status: 400 });
    }

    try {
      // Fetch the purchase to get the correct credit amount
      const purchase = await prismadb.purchase.findUnique({
        where: { id: purchaseId },
      });

      if (!purchase) {
        return new NextResponse("Purchase not found", { status: 400 });
      }

      // Find or create the user
      let user = await prismadb.user.findUnique({
        where: { userId: userId },
      });

      if (!user) {
        user = await prismadb.user.create({
          data: {
            userId: userId,
            totalCredit: purchase.credit,
          },
        });
      } else {
        user = await prismadb.user.update({
          where: { userId: userId },
          data: {
            totalCredit: user.totalCredit + purchase.credit,
          },
        });
      }

      return new NextResponse("Success", { status: 200 });
    } catch (error) {
      console.error("Error processing webhook:", error);
      return new NextResponse("Internal Server Error", { status: 500 });
    }
  }

  return new NextResponse("Unhandled event type", { status: 200 });
}
