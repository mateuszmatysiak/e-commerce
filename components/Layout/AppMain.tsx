import { FC, PropsWithChildren } from "react";

export const AppMain: FC<PropsWithChildren> = ({ children }) => {
  return (
    <main className="pt-28 p-8 bg-white dark:bg-slate-900">
      <div className="max-w-screen-xl m-auto">{children}</div>
    </main>
  );
};
