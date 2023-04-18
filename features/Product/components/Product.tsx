import type Prisma from "@prisma/client";
import { Decimal } from "@prisma/client/runtime";
import Image from "next/image";
import Link from "next/link";

import { useCheckoutContext } from "@/features/Checkout/hooks/useCheckoutContext";
import { Button } from "@/shared/components/Button";

export function formatCurrency(value: Decimal) {
  return new Intl.NumberFormat("pl", { style: "currency", currency: "PLN" }).format(Number(value));
}

interface ProductProps {
  product: Prisma.Product;
}

export const Product = ({ product }: ProductProps) => {
  const { id, image, name, price, description } = product;

  const { dispatch } = useCheckoutContext();

  return (
    <li className="flex flex-col gap-3">
      <div className="relative h-64 rounded-lg overflow-hidden border border-gray-200 dark:border-slate-800">
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

      <div className="flex flex-col gap-3">
        <div className="flex justify-between items-baseline">
          <Link
            href={`/product/${id}`}
            className="text-2xl hover:text-blue-700 hover:dark:text-blue-700"
          >
            {name}
          </Link>
          <span>{formatCurrency(price)}</span>
        </div>

        <p className="text-gray-600 font-light line-clamp-2 dark:text-gray-400">{description}</p>

        <Button onClick={() => dispatch({ type: "addProduct", product })}>Dodaj do koszyka</Button>
      </div>
    </li>
  );
};
