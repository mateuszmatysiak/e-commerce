import { ArrowPathIcon } from "@heroicons/react/20/solid";
import { signIn, useSession } from "next-auth/react";
import Link from "next/link";

import { Checkout } from "@app/features-checkout";
import { Button } from "@app/ui";
import { AccountMenu } from "./AccountMenu";

export const AppHeader = () => {
  const { status } = useSession();

  return (
    <header className="fixed inset-x-0 z-10 mx-auto flex h-20 w-full max-w-screen-xl items-center justify-between gap-8 border-b border-b-gray-200 bg-gray-100 px-8 dark:border-b-slate-800 dark:bg-slate-900">
      <Link
        href="/"
        className="font-light text-gray-600 hover:text-blue-700 dark:text-gray-400 hover:dark:text-blue-700"
      >
        Sklep internetowy
      </Link>

      <div className="flex gap-2 md:gap-8">
        {status === "loading" ? (
          <div className="flex h-10 w-10 items-center justify-center rounded-full bg-gray-300 dark:bg-slate-800">
            <ArrowPathIcon className="h-4 w-4 animate-spin" />
          </div>
        ) : null}

        {status === "authenticated" ? <AccountMenu /> : null}

        {status === "unauthenticated" ? (
          <Button onClick={() => signIn()}>Zaloguj się</Button>
        ) : null}

        <Checkout />
      </div>
    </header>
  );
};
