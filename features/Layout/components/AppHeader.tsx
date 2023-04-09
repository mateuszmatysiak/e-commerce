import { ArrowPathIcon } from "@heroicons/react/20/solid";
import { signIn, useSession } from "next-auth/react";
import Link from "next/link";
import { useRouter } from "next/router";

import { Checkout } from "@/features/Checkout/components/Checkout";
import { Button } from "@/shared/components/Button";
import { AccountMenu } from "./AccountMenu";

export const AppHeader = () => {
  const { status } = useSession();
  const { pathname } = useRouter();

  const isSignInPage = pathname.includes("/auth/signin");

  return (
    <header className="fixed inset-x-0 flex justify-between items-center gap-8 w-full max-w-screen-xl h-20 mx-auto px-8 bg-gray-100 border-b border-b-gray-200 z-10 dark:bg-slate-900 dark:border-b-slate-800">
      <Link
        href="/"
        className="font-light text-gray-600 dark:text-gray-400 hover:text-blue-700 hover:dark:text-blue-700"
      >
        Sklep internetowy
      </Link>

      <div className="flex gap-8">
        {status === "loading" ? (
          <div className="flex justify-center items-center w-10 h-10 rounded-full bg-gray-300 dark:bg-slate-800">
            <ArrowPathIcon className="w-4 h-4 animate-spin" />
          </div>
        ) : null}

        {status === "authenticated" ? <AccountMenu /> : null}

        {!isSignInPage && status === "unauthenticated" ? (
          <Button variant="contained" onClick={() => signIn()}>
            Zaloguj się
          </Button>
        ) : null}

        {!isSignInPage ? <Checkout /> : null}
      </div>
    </header>
  );
};
