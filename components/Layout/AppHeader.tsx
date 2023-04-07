import { ShoppingBagIcon } from "@heroicons/react/24/outline";
import { signIn, useSession } from "next-auth/react";
import Link from "next/link";

import { AccountMenu } from "../AccountMenu";

export const AppHeader = () => {
  const { status } = useSession();

  return (
    <header className="fixed w-full h-20 px-8 bg-gray-100 border-b border-b-gray-200 z-10 dark:bg-slate-900 dark:border-b-slate-800">
      <div className="flex justify-between items-center gap-8 h-full max-w-screen-xl m-auto">
        <Link
          href="/"
          className="font-light text-gray-600 dark:text-gray-400 hover:text-blue-700 hover:dark:text-blue-700"
        >
          eCommerce
        </Link>

        <div className="flex gap-8">
          {status === "loading" ? <div>Sprawdzanie sesji...</div> : null}

          {status === "authenticated" ? <AccountMenu /> : null}

          {status === "unauthenticated" ? (
            <button
              className="bg-blue-600 text-white px-4 py-2 rounded-md hover:bg-blue-700"
              onClick={() => signIn()}
            >
              Zaloguj się
            </button>
          ) : null}

          <div className="flex items-center gap-1">
            <button className="text-black dark:text-white hover:dark:text-blue-700 hover:text-blue-700">
              <ShoppingBagIcon className="w-6 h-6" aria-hidden="true" />
              <span className="sr-only">Przycisk otwierający koszyk z zakupami</span>
            </button>
            <span className="text-gray-600 dark:text-gray-200">0</span>
          </div>
        </div>
      </div>
    </header>
  );
};
