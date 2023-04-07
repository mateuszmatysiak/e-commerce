import { ShoppingBagIcon } from "@heroicons/react/24/outline";
import { signIn, signOut, useSession } from "next-auth/react";
import Image from "next/image";

import userAvatar from "@/assets/user.png";

export const AppHeader = () => {
  const { data: session, status } = useSession();

  return (
    <header className="flex justify-end items-center gap-8 fixed w-full h-16 px-8 bg-gray-100 border-b border-b-gray-200 z-10">
      {status === "loading" ? <div>Sprawdzanie sesji...</div> : null}

      {status === "authenticated" ? (
        <>
          <div className="relative w-8 h-8 rounded-full overflow-hidden">
            <Image
              src={session.user?.image || userAvatar}
              alt="User image"
              fill={true}
              loading="lazy"
              sizes="(max-width: 768px) 100vw,
              (max-width: 1200px) 50vw,
              33vw"
            />
          </div>
          <button onClick={() => signOut()}>Wyloguj się</button>
        </>
      ) : null}

      {status === "unauthenticated" ? <button onClick={() => signIn()}>Zaloguj się</button> : null}

      <div className="flex items-center gap-1">
        <button>
          <ShoppingBagIcon className="w-6 h-6 text-black" />
        </button>
        <span className="text-gray-600">0</span>
      </div>
    </header>
  );
};
