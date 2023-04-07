import { FC, PropsWithChildren } from "react";

export const AppMain: FC<PropsWithChildren> = ({ children }) => {
  return (
    <main className="pt-28 pb-12 px-8 bg-gray-100 dark:bg-slate-900">
      <div className="max-w-screen-xl m-auto">{children}</div>
    </main>
  );
};
