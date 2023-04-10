import { useContext } from "react";
import { CheckoutContext } from "../utils/context";

export const useCheckoutContext = () => {
  const context = useContext(CheckoutContext);

  if (!context) {
    throw new Error(`Cannot use CheckoutContext without CheckoutContextProvider`);
  }

  return context;
};
