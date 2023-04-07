import { ShoppingBagIcon } from "@heroicons/react/24/outline";
import { signIn, useSession } from "next-auth/react";

import { AccountMenu } from "../AccountMenu";

export const AppHeader = () => {
  const { status } = useSession();

  return (
    <header className="fixed w-full h-20 px-8 bg-gray-100 border-b border-b-gray-200 z-10 dark:bg-slate-950 dark:border-b-slate-800">
      <div className="flex justify-end items-center gap-8 h-full max-w-screen-xl m-auto">
        {status === "loading" ? <div>Sprawdzanie sesji...</div> : null}

        {status === "authenticated" ? <AccountMenu /> : null}

        {status === "unauthenticated" ? (
          <button className="bg-blue-600 px-4 py-2 rounded-md" onClick={() => signIn()}>
            Zaloguj się
          </button>
        ) : null}

        <div className="flex items-center gap-1">
          <button>
            <ShoppingBagIcon className="w-6 h-6 text-black dark:text-white" />
          </button>
          <span className="text-gray-600 dark:text-gray-200">0</span>
        </div>
      </div>
    </header>
  );
};
