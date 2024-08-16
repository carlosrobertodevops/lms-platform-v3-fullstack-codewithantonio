import Stripe from "stripe";
import { headers } from "next/headers";
import { NextResponse } from "next/server";
import { stripe } from "@/lib/stripe";
import { db } from "@/lib/db";

export async function POST(req: Request) {
  const body = await req.text();
  const signature = headers().get("Stripe-Signature") as string;

  //console.log("Body => ", body);

  let event: Stripe.Event;

  try {
    event = stripe.webhooks.constructEvent(
      body,
      signature,
      process.env.STRIPE_WEBHOOK_SECRET!
    )
  }
  catch (error: any) {
    console.log("Not create stripe.webhooks.constructEvent !!!")
    return new NextResponse(`Webhook Error: constructEvent ${error.message}`, { status: 400 });
  }

  const session = event.data.object as Stripe.Checkout.Session;
  const userId = session?.metadata?.userId;
  const courseId = session?.metadata?.courseId;

  // console.log("Session => ", session);

  if (event.type === "checkout.session.completed") {

    console.log("userId => ", session?.metadata?.userId);
    console.log("courseId => ", session?.metadata?.courseId);

    if (!userId || !courseId) {
      console.log(`Not userId and courseId ${courseId}`)
      return new NextResponse(`Webhook Error: Missing metadata`, { status: 400 });
    }
    try {
      await db.purchase.create({
        data: {
          courseId: courseId,
          userId: userId,
        }
      });
    } catch (error: any) {
      console.log("Not create purchase !!!")
      return new NextResponse(`Webhook Error: purchase and ${error.message}`, { status: 400 });
    }
  } else {
    return new NextResponse(`Webhook Error: Unhandled event type ${event.type}`, { status: 200 });
  }

  return new NextResponse(null, { status: 200 });
}