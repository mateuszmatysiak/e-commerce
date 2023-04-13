import type Prisma from "@prisma/client";

import { Button } from "@/shared/components/Button";
import { useCheckoutContext } from "../hooks/useCheckoutContext";
import { ProductCart } from "./ProductCart";

export const ProductCarts = () => {
  const { state, dispatch } = useCheckoutContext();
  const { products } = state;

  const handleDeleteProduct = (productId: Prisma.Product["id"]) => () => {
    dispatch({ type: "deleteProduct", productId });
  };

  return (
    <ul className="flex flex-col divide-y">
      {products.map((product, productIndex) => (
        <ProductCart
          key={`${productIndex}.${product.id}`}
          product={product}
          onDeleteProduct={handleDeleteProduct}
        />
      ))}

      <Button>Przejdź do zapłaty</Button>
    </ul>
  );
};
