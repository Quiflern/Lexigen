import { prismadb } from "@/lib/prismadb";
import { headers } from "next/headers";
import { NextResponse } from "next/server";
import Stripe from "stripe";

const stripe = new Stripe(process.env.STRIPE_SECRET_KEY as string, {
  apiVersion: "2024-06-20",
});

export async function POST(req: Request) {
  // Retrieve the raw body from the request
  const body = await req.text();
  // Get the Stripe signature from the headers
  const sig = headers().get("stripe-signature");

  let event;

  try {
    // Construct the Stripe event using the raw body and signature
    event = stripe.webhooks.constructEvent(
      body,
      sig!,
      process.env.STRIPE_WEBHOOK_SECRET_KEY!
    );
  } catch (error) {
    // Return an error response if the signature is invalid
    return NextResponse.json({ error: "Invalid Signature" }, { status: 400 });
  }

  // Extract the session object from the event
  const session = event.data.object as Stripe.Checkout.Session;
  const userId = session?.metadata?.userId;

  if (event.type === "checkout.session.completed") {
    // Handle the case where the checkout session has completed
    if (!userId) {
      return new NextResponse("Invalid session", { status: 400 });
    }

    try {
      // Check if the user already exists in the database
      const findUserByUserID = await prismadb.user.findUnique({
        where: {
          userId: userId,
        },
      });

      if (!findUserByUserID) {
        // If the user doesn't exist, create a new user with credits
        await prismadb.user.create({
          data: {
            userId: userId,
            totalCredit: 10000 + 10000, // Adjust the credit amount as needed
          },
        });
      } else {
        // If the user exists, update the user's total credits
        await prismadb.user.update({
          where: {
            userId: userId,
          },
          data: {
            totalCredit: findUserByUserID.totalCredit + 10000, // Adjust the credit amount as needed
          },
        });
      }
    } catch (error) {
      // Return an error response if there's an issue with the user update
      return new NextResponse("Invalid User not authorized", { status: 500 });
    }
  } else {
    // Return a success response for non-checkout session events
    return new NextResponse("Invalid event", { status: 200 });
  }

  // Return a success response after processing the event
  return new NextResponse("Success", { status: 200 });
}
