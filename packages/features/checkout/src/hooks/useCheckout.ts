import { loadStripe } from "@stripe/stripe-js";
import { useMutation } from "@tanstack/react-query";
import ky from "ky-universal";
import { Stripe } from "stripe";

import { Product } from "@app/database";

type CheckoutSessionId = Pick<Stripe.Checkout.Session, "id">;
type CheckoutProducts = Stripe.Checkout.SessionCreateParams.LineItem;

export const transformProduct = ({
  name,
  description,
  price,
  image,
}: Product): CheckoutProducts => ({
  price_data: {
    currency: "pln",
    product_data: { name, description, images: [image] },
    unit_amount: Number(price),
  },
  quantity: 1,
});

const EXAMPLE_PRODUCT_ID = "price_1N4ofqCx6E9015h4PU7xJrQy";

const checkoutCart = async (products: Product[]) => {
  const stripeItems = products.map((product) => transformProduct(product));

  return await ky(`http://localhost:3000/api/checkoutSession`, {
    method: "POST",
    // body: JSON.stringify(stripeItems),
    body: JSON.stringify([{ price: EXAMPLE_PRODUCT_ID, quantity: 1 }]),
  }).json<CheckoutSessionId>();
};

const redirectToCheckout = async (session: CheckoutSessionId) => {
  const stripe = await loadStripe(process.env.NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY);

  if (!stripe) throw new Error("Stripe cannot be loaded.");

  return stripe.redirectToCheckout({
    sessionId: session.id,
  });
};

export const useCheckout = () => {
  return useMutation((products: Product[]) => checkoutCart(products), {
    onSuccess: redirectToCheckout,
  });
};
