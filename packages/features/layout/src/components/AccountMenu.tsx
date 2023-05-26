import { Menu, Transition } from "@headlessui/react";
import { ArrowLeftOnRectangleIcon, UserIcon } from "@heroicons/react/20/solid";
import { signOut, useSession } from "next-auth/react";
import Image from "next/image";
import { Fragment } from "react";

import userAvatar from "../assets/user.png";

export const AccountMenu = () => {
  const { data: session } = useSession();

  return (
    <Menu as="div" className="relative inline-block text-left">
      {({ open }) => (
        <>
          <Menu.Button
            className={`relative h-10 w-10 overflow-hidden rounded-full border border-slate-800 hover:border-blue-700 ${
              open ? "border-blue-700" : ""
            }`}
          >
            <Image
              src={session?.user?.image || userAvatar}
              alt="User image"
              fill={true}
              loading="lazy"
              sizes="(max-width: 768px) 100vw,
        (max-width: 1200px) 50vw,
        33vw"
            />
          </Menu.Button>

          <Transition
            as={Fragment}
            enter="transition ease-out duration-100"
            enterFrom="transform opacity-0 scale-95"
            enterTo="transform opacity-100 scale-100"
            leave="transition ease-in duration-75"
            leaveFrom="transform opacity-100 scale-100"
            leaveTo="transform opacity-0 scale-95"
          >
            <Menu.Items className="absolute right-0 mt-2 w-56 origin-top-right divide-y divide-gray-200 rounded-md bg-white text-black shadow-lg">
              <Menu.Item>
                <div className="flex items-center gap-2 px-4 py-3">
                  <UserIcon className="h-5 w-5" aria-hidden="true" />
                  {session?.user?.name}
                </div>
              </Menu.Item>
              <Menu.Item>
                {({ active }) => (
                  <button
                    className={`flex w-full items-center gap-2 rounded-b-md px-4 py-3 ${
                      active ? "bg-blue-100 text-blue-900" : "text-gray-900"
                    }`}
                    onClick={() => signOut()}
                  >
                    <ArrowLeftOnRectangleIcon className="h-5 w-5" aria-hidden="true" />
                    Wyloguj się
                  </button>
                )}
              </Menu.Item>
            </Menu.Items>
          </Transition>
        </>
      )}
    </Menu>
  );
};
