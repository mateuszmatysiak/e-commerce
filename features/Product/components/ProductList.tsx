import type Prisma from "@prisma/client";

import { ProductListItem } from "./ProductListItem";

interface ProductListProps {
  products: Prisma.Product[];
}

export const ProductList = ({ products }: ProductListProps) => {
  return (
    <ul className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
      {products.map((product) => {
        return <ProductListItem key={product.id} product={product} />;
      })}
    </ul>
  );
};
