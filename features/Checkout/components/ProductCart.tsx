import { TrashIcon } from "@heroicons/react/24/outline";
import Link from "next/link";

export const ProductCart = () => {
  return (
    <li className="flex items-center justify-between gap-4 py-4">
      <div className="flex items-center gap-4">
        <div className="border border-gray-200 rounded-md w-24 h-20">{/* Image */}</div>

        <div>
          <Link href="/product" className="hover:text-blue-700">
            Klasyczna koszulka
          </Link>
          <p className="text-sm text-gray-500">Czarny</p>
        </div>
      </div>

      <button className="h-5 w-5 text-red-600 hover:text-red-700">
        <TrashIcon aria-hidden="true" />
        <span className="sr-only">Przycisk usuwający produkt z koszyka</span>
      </button>
    </li>
  );
};
