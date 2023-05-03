import { type Product } from "@app/database";
import { Dispatch, ReactNode, createContext, useMemo, useReducer } from "react";

interface CheckoutState {
  products: Product[];
}

type CheckoutAction =
  | {
      type: "addProduct";
      product: Product;
    }
  | {
      type: "deleteProduct";
      productId: Product["id"];
    };

interface ContextValue {
  state: CheckoutState;
  dispatch: Dispatch<CheckoutAction>;
}

export const CheckoutContext = createContext<ContextValue | undefined>(undefined);

const initialState: CheckoutState = {
  products: [],
};

const checkoutReducer = (state: CheckoutState, action: CheckoutAction) => {
  switch (action.type) {
    case "addProduct": {
      const newProducts = [...state.products, action.product];

      return {
        ...state,
        products: newProducts,
      };
    }
    case "deleteProduct": {
      const newProducts = state.products.filter((product) => product.id !== action.productId);

      return {
        ...state,
        products: newProducts,
      };
    }
  }
};

export const CheckoutContextProvider = ({ children }: { children: ReactNode }) => {
  const [state, dispatch] = useReducer(checkoutReducer, initialState);

  const value = useMemo(() => ({ state, dispatch }), [state]);

  return <CheckoutContext.Provider value={value}>{children}</CheckoutContext.Provider>;
};
