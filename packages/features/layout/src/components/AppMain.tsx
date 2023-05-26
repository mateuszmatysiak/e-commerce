import { ReactNode } from "react";

interface AppMainProps {
  children: ReactNode;
}

export const AppMain = ({ children }: AppMainProps) => {
  return (
    <main className="mx-auto w-full max-w-screen-xl flex-1 bg-gray-100 px-8 pb-12 pt-28 dark:bg-slate-900">
      {children}
    </main>
  );
};
