import { Listbox, Transition } from "@headlessui/react";
import { CheckIcon, ChevronUpDownIcon } from "@heroicons/react/20/solid";
import { useTheme } from "next-themes";
import { Fragment } from "react";

const THEMES = [
  { label: "Systemowy", value: "system" },
  { label: "Ciemny", value: "dark" },
  { label: "Jasny", value: "light" },
];

export const ThemeSelect = () => {
  const { theme, setTheme } = useTheme();

  return (
    <Listbox as="div" value={theme} onChange={setTheme}>
      <Listbox.Button className="relative rounded-md bg-blue-600 text-white py-2 pl-6 pr-12 text-left hover:bg-blue-700">
        <span className="block truncate">Motyw</span>
        <span className="pointer-events-none absolute inset-y-0 right-0 flex items-center pr-2">
          <ChevronUpDownIcon className="h-5 w-5 text-gray-400" aria-hidden="true" />
        </span>
      </Listbox.Button>
      <Transition
        as={Fragment}
        leave="transition ease-in duration-100"
        leaveFrom="opacity-100"
        leaveTo="opacity-0"
      >
        <Listbox.Options className="absolute -mt-44 max-h-60 overflow-auto rounded-md bg-white py-1 shadow-md">
          {THEMES.map(({ label, value }) => (
            <Listbox.Option
              key={value}
              className={({ active }) =>
                `relative cursor-pointer select-none py-2 pl-10 pr-4 ${
                  active ? "bg-blue-100 text-blue-900" : "text-gray-900"
                }`
              }
              value={value}
            >
              {({ selected }) => (
                <>
                  <span className={`block truncate ${selected ? "font-medium" : "font-normal"}`}>
                    {label}
                  </span>

                  {selected ? (
                    <span className="absolute inset-y-0 left-0 flex items-center pl-3 text-blue-600">
                      <CheckIcon className="h-5 w-5" aria-hidden="true" />
                      <span className="sr-only">Ikona oznaczająca aktywną opcję</span>
                    </span>
                  ) : null}
                </>
              )}
            </Listbox.Option>
          ))}
        </Listbox.Options>
      </Transition>
    </Listbox>
  );
};
