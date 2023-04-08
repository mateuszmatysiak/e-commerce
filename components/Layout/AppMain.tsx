import { FC, PropsWithChildren } from "react";

export const AppMain: FC<PropsWithChildren> = ({ children }) => {
  return (
    <main className="flex-1 max-w-screen-xl w-full mx-auto pt-28 pb-12 px-8 bg-gray-100 dark:bg-slate-900">
      {children}
    </main>
  );
};
