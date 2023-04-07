import Image from "next/image";

import { Product } from "@prisma/client";
import { Decimal } from "@prisma/client/runtime";

export function formatCurrency(value: Decimal) {
  return new Intl.NumberFormat("pl", { style: "currency", currency: "PLN" }).format(Number(value));
}

export const ProductItem = ({ image, name, price, description }: Product) => {
  return (
    <li>
      <div className="relative h-64">
        <Image
          src={image}
          alt={name}
          fill={true}
          sizes="(max-width: 768px) 100vw,
              (max-width: 1200px) 50vw,
              33vw"
          className="object-contain"
          priority
        />
      </div>

      <div className="flex flex-col gap-3 p-6">
        <div className="flex justify-between items-baseline">
          <h2 className="text-2xl">{name}</h2>
          <span>{formatCurrency(price)}</span>
        </div>

        <p className="text-gray-500 line-clamp-2">{description}</p>

        <button className="bg-blue-600 w-full p-2 rounded-md text-white">Kup</button>
        <button className="border border-blue-600 w-full p-2 rounded-md text-blue-600">
          Dodaj do koszyka
        </button>
      </div>
    </li>
  );
};
