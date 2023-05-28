import { twMerge } from "tailwind-merge";

import { type Product } from "@app/database";
import { ProductListItem } from "./ProductListItem";

interface ProductSliderProps {
  products: Product[];
  className?: string;
}

export const ProductSlider = ({ products, className }: ProductSliderProps) => {
  const c = twMerge(`flex gap-4 overflow-x-scroll`, className);
  return (
    <div className={c}>
      {products.slice(0, 6).map((product) => (
        <div key={product.id} className="w-1/3 flex-shrink-0 max-lg:w-full">
          <ProductListItem product={product} />
        </div>
      ))}
    </div>
  );
};
