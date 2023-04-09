import type Prisma from "@prisma/client";

import { Product } from "./Product";

type ProductsProps = {
  products: Prisma.Product[];
};

export const Products = ({ products }: ProductsProps) => {
  return (
    <ul className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
      {products.map((product) => {
        return <Product key={product.id} {...product} />;
      })}
    </ul>
  );
};
