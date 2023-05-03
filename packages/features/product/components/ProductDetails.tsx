import Image from "next/image";

import { type Product } from "@app/database";
import { useCheckoutContext } from "@app/features-checkout";
import { Button, formatCurrency } from "@app/ui";

interface ProductDetailsProps {
  product: Product;
}

export const ProductDetails = ({ product }: ProductDetailsProps) => {
  const { dispatch } = useCheckoutContext();

  const { image, name, price, description } = product;

  return (
    <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
      <div className="h-96 relative rounded-lg overflow-hidden border border-gray-200 dark:border-slate-800">
        <Image
          src={image}
          alt={name}
          fill={true}
          sizes="(max-width: 768px) 100vw,
              (max-width: 1200px) 50vw,
              33vw"
          className="object-contain bg-white"
          priority
        />
      </div>

      <div className="flex flex-col gap-4">
        <h2 className="text-4xl">{name}</h2>
        <p className="text-gray-600 font-light line-clamp-6 dark:text-gray-400">{description}</p>
        <span>{formatCurrency(price)}</span>

        <Button onClick={() => dispatch({ type: "addProduct", product })} className="mt-auto">
          Dodaj do koszyka
        </Button>
      </div>
    </div>
  );
};
