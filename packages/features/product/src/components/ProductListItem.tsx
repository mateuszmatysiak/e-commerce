import Image from "next/image";
import Link from "next/link";

import { type Product } from "@app/database";
import { useCheckoutContext } from "@app/features-checkout";
import { Button } from "@app/ui";
import { formatCurrency } from "@app/utils";

interface ProductListItemProps {
  product: Product;
}

export const ProductListItem = ({ product }: ProductListItemProps) => {
  const { dispatch } = useCheckoutContext();

  const { id, image, name, price, description } = product;

  return (
    <li className="flex flex-col gap-3">
      <div className="relative h-64 overflow-hidden rounded-lg border border-gray-200 dark:border-slate-800">
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

      <div className="flex flex-col gap-3">
        <div className="flex items-baseline justify-between">
          <Link
            href={`/product/${id}`}
            className="text-2xl hover:text-blue-700 hover:dark:text-blue-700"
          >
            {name}
          </Link>
          <span>{formatCurrency(price)}</span>
        </div>

        <p className="line-clamp-2 font-light text-gray-600 dark:text-gray-400">{description}</p>

        <Button onClick={() => dispatch({ type: "addProduct", product })}>Dodaj do koszyka</Button>
      </div>
    </li>
  );
};
