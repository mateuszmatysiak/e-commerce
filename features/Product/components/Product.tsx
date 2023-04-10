import type Prisma from "@prisma/client";
import { Decimal } from "@prisma/client/runtime";
import Image from "next/image";

import { Button } from "@/shared/components/Button";

export function formatCurrency(value: Decimal) {
  return new Intl.NumberFormat("pl", { style: "currency", currency: "PLN" }).format(Number(value));
}

type ProductProps = Prisma.Product;

export const Product = ({ image, name, price, description }: ProductProps) => {
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
          <h2 className="text-2xl">{name}</h2>
          <span>{formatCurrency(price)}</span>
        </div>

        <p className="text-gray-600 font-light line-clamp-2 dark:text-gray-400">{description}</p>

        <Button>Dodaj do koszyka</Button>
      </div>
    </li>
  );
};