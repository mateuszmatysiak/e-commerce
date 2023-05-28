import { twMerge } from "tailwind-merge";

import { type Product } from "@app/database";
import { ProductListItem } from "./ProductListItem";

interface ProductListProps {
  products: Product[];
  className?: string;
}

export const ProductList = ({ products, className }: ProductListProps) => {
  const c = twMerge(`grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3`, className);
  return (
    <ul className={c}>
      {products.map((product) => {
        return <ProductListItem key={product.id} product={product} />;
      })}
    </ul>
  );
};
