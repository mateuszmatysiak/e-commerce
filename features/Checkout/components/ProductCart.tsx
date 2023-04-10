import { TrashIcon } from "@heroicons/react/24/outline";
import type Prisma from "@prisma/client";
import Image from "next/image";
import Link from "next/link";

interface ProductCartProps {
  product: Prisma.Product;
  onDeleteProduct: (productId: Prisma.Product["id"]) => () => void;
}

export const ProductCart = ({ product, onDeleteProduct }: ProductCartProps) => {
  const { id, name, description, image } = product;

  return (
    <li className="flex items-center justify-between gap-4 py-4">
      <div className="flex items-center gap-4">
        <div className="relative border border-gray-200 rounded-md w-24 min-w-[6rem] h-20 overflow-hidden">
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

        <div>
          <Link href="/product" className="hover:text-blue-700">
            {name}
          </Link>
          <p className="text-sm text-gray-500 line-clamp-2">{description}</p>
        </div>
      </div>

      <button
        className="h-5 w-5 min-w-[1.25rem] text-red-600 hover:text-red-700"
        onClick={onDeleteProduct(id)}
      >
        <TrashIcon aria-hidden="true" />
        <span className="sr-only">Przycisk usuwający produkt z koszyka</span>
      </button>
    </li>
  );
};
