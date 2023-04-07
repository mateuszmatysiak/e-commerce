import { Menu, Transition } from "@headlessui/react";
import { ArrowLeftOnRectangleIcon, UserIcon } from "@heroicons/react/20/solid";
import { signOut, useSession } from "next-auth/react";
import Image from "next/image";
import { Fragment } from "react";

import userAvatar from "@/assets/user.png";

export const AccountMenu = () => {
  const { data: session } = useSession();

  return (
    <Menu as="div" className="relative inline-block text-left">
      <Menu.Button className="relative w-10 h-10 rounded-full overflow-hidden border border-slate-800 hover:border-blue-700">
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
        <Menu.Items className="absolute right-0 mt-2 w-56 origin-top-right divide-y divide-gray-200 text-black bg-white rounded-md shadow-lg">
          <Menu.Item>
            <div className="flex items-center gap-2 py-3 px-4">
              <UserIcon className="w-5 h-5" aria-hidden="true" />
              {session?.user?.name}
            </div>
          </Menu.Item>
          <Menu.Item>
            {({ active }) => (
              <button
                className={`flex items-center gap-2 py-3 px-4 w-full rounded-b-md ${
                  active ? "bg-blue-100 text-blue-900" : "text-gray-900"
                }`}
                onClick={() => signOut()}
              >
                <ArrowLeftOnRectangleIcon className="w-5 h-5" aria-hidden="true" />
                Wyloguj się
              </button>
            )}
          </Menu.Item>
        </Menu.Items>
      </Transition>
    </Menu>
  );
};
