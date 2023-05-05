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
    <ul className="flex flex-col max-h-96 pr-4 -mr-4 divide-y overflow-y-auto">
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
