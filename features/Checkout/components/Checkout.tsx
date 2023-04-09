import { Popover, Transition } from "@headlessui/react";
import { ShoppingCartIcon, XMarkIcon } from "@heroicons/react/24/outline";
import { Fragment } from "react";

import { Button } from "@/shared/components/Button";
import { ProductCart } from "./ProductCart";

export const Checkout = () => {
  return (
    <Popover className="flex items-center relative">
      {({ open, close }) => (
        <>
          <Popover.Button
            className={`flex gap-1 p-2 text-black dark:text-white hover:text-blue-700 hover:dark:text-blue-700  ${
              open ? "text-blue-700 dark:text-blue-700" : ""
            }`}
          >
            <ShoppingCartIcon className="w-6 h-6" aria-hidden="true" />
            <span
              className="text-gray-600 dark:text-gray-200"
              aria-describedby="Liczba produktów w koszyku"
            >
              0
            </span>
            <span className="sr-only">Przycisk otwierający koszyk z zakupami</span>
          </Popover.Button>

          <Transition
            as={Fragment}
            enter="transition ease-out duration-200"
            enterFrom="opacity-0 translate-y-1"
            enterTo="opacity-100 translate-y-0"
            leave="transition ease-in duration-150"
            leaveFrom="opacity-100 translate-y-0"
            leaveTo="opacity-0 translate-y-1"
          >
            <Popover.Panel className="absolute top-12 right-0 z-10">
              <div className="flex flex-col bg-white text-black p-6 w-96 overflow-hidden border border-gray-200 rounded-md shadow-lg">
                <div className="flex justify-between items-center">
                  <h2 className="text-xl">Produkty w koszyku</h2>

                  <button onClick={close} className="h-6 w-6 hover:text-blue-700">
                    <XMarkIcon aria-hidden="true" />
                    <span className="sr-only">Przycisk zamykający koszyk z zakupami</span>
                  </button>
                </div>

                <ul className="divide-y">
                  <ProductCart />
                  <ProductCart />
                </ul>

                <Button>Przejdź do zapłaty</Button>
              </div>
            </Popover.Panel>
          </Transition>
        </>
      )}
    </Popover>
  );
};
