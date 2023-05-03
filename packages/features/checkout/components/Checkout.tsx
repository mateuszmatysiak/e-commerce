import { Popover, Transition } from "@headlessui/react";
import { ShoppingCartIcon, XMarkIcon } from "@heroicons/react/24/outline";
import { Fragment } from "react";

import { useCheckoutContext } from "../hooks/useCheckoutContext";
import { ProductCarts } from "./ProductCarts";
import { Button } from "@app/ui";

export const Checkout = () => {
  const { state } = useCheckoutContext();
  const { products } = state;

  const numberOfProducts = products.length;

  return (
    <Popover className="flex items-center relative">
      {({ open, close }) => (
        <>
          <Popover.Button
            className={`flex gap-1 p-2 -mr-2 text-black dark:text-white hover:text-blue-700 hover:dark:text-blue-700  ${
              open ? "text-blue-700 dark:text-blue-700" : ""
            }`}
          >
            <ShoppingCartIcon className="w-6 h-6" aria-hidden="true" />
            <span
              className="text-gray-600 dark:text-gray-200"
              aria-describedby="Liczba produktów w koszyku"
            >
              {numberOfProducts}
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
            <Popover.Panel className="absolute top-12 right-0 z-10 max-md:fixed max-md:left-0 max-md:top-0 max-md-bottom-0 max-md-right-0">
              <div className="flex flex-col p-6 bg-white text-black overflow-x-hidden border border-gray-200 shadow-lg md:w-96 md:rounded-md">
                <div className="flex justify-between items-center pb-6">
                  <h2 className="text-xl">Produkty w koszyku</h2>

                  <button onClick={close} className="h-6 w-6 hover:text-blue-700">
                    <XMarkIcon aria-hidden="true" />
                    <span className="sr-only">Przycisk zamykający koszyk z zakupami</span>
                  </button>
                </div>

                {numberOfProducts ? (
                  <div>
                    <ProductCarts />

                    <div className="pt-6">
                      <Button className="w-full">Przejdź do zapłaty</Button>
                    </div>
                  </div>
                ) : (
                  <div className="text-center text-sm text-gray-500">Brak produktów w koszyku</div>
                )}
              </div>
            </Popover.Panel>
          </Transition>
        </>
      )}
    </Popover>
  );
};
