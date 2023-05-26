import { type Product } from "@app/database";
import { useCheckoutContext } from "../hooks/useCheckoutContext";
import { ProductCart } from "./ProductCart";

export const ProductCarts = () => {
  const { state, dispatch } = useCheckoutContext();
  const { products } = state;

  const handleDeleteProduct = (productId: Product["id"]) => () => {
    dispatch({ type: "deleteProduct", productId });
  };

  return (
    <ul className="-mr-4 flex max-h-96 flex-col divide-y overflow-y-auto pr-4">
      {products.map((product, productIndex) => (
        <ProductCart
          key={`${productIndex}.${product.id}`}
          product={product}
          onDeleteProduct={handleDeleteProduct}
        />
      ))}
    </ul>
  );
};
