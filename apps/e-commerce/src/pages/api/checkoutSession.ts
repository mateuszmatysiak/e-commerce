import { NextApiRequest, NextApiResponse } from "next";
import { Stripe } from "stripe";

const stripe = new Stripe(process.env.STRIPE_SECRET_KEY, {
  apiVersion: "2022-11-15",
});

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  try {
    const { id } = await stripe.checkout.sessions.create({
      mode: "payment",
      // submit_type: "donate",
      payment_method_types: ["card"],
      success_url: `${req.headers.origin}`,
      cancel_url: `${req.headers.origin}`,
      line_items: JSON.parse(req.body),
    });

    res.status(200).json({ id });
    res.end();
  } catch {
    res.status(500);
  }
}
