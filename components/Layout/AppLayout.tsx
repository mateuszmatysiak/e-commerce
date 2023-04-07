import { FC, PropsWithChildren } from "react";

import { AppFooter } from "./AppFooter";
import { AppHeader } from "./AppHeader";
import { AppMain } from "./AppMain";

export const AppLayout: FC<PropsWithChildren> = ({ children }) => {
  return (
    <>
      <AppHeader />
      <AppMain>{children}</AppMain>
      <AppFooter />
    </>
  );
};
