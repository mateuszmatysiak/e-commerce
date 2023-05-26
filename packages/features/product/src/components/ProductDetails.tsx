import Image from "next/image";

import { type Product } from "@app/database";
import { useCheckoutContext } from "@app/features-checkout";
import { Button } from "@app/ui";
import { formatCurrency } from "@app/utils";

interface ProductDetailsProps {
  product: Product;
}

export const ProductDetails = ({ product }: ProductDetailsProps) => {
  const { dispatch } = useCheckoutContext();

  const { image, name, price, description } = product;

  return (
    <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
      <div className="relative h-96 overflow-hidden rounded-lg border border-gray-200 dark:border-slate-800">
        <Image
          src={image}
          alt={name}
          fill={true}
          sizes="(max-width: 768px) 100vw,
              (max-width: 1200px) 50vw,
              33vw"
          className="bg-white object-contain"
          priority
        />
      </div>

      <div className="flex flex-col gap-4">
        <h2 className="text-4xl">{name}</h2>
        <p className="line-clamp-6 font-light text-gray-600 dark:text-gray-400">{description}</p>
        <span>{formatCurrency(price)}</span>

        <Button onClick={() => dispatch({ type: "addProduct", product })} className="mt-auto">
          Dodaj do koszyka
        </Button>
      </div>
    </div>
  );
};
