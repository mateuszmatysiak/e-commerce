import { Karla } from "next/font/google";
import { FC, PropsWithChildren } from "react";

import { AppFooter } from "./AppFooter";
import { AppHeader } from "./AppHeader";
import { AppMain } from "./AppMain";

const karla = Karla({
  subsets: ["latin"],
  variable: "--font-karla",
});

export const AppLayout: FC<PropsWithChildren> = ({ children }) => {
  return (
    <div className={`${karla.variable} font-sans`}>
      <AppHeader />
      <AppMain>{children}</AppMain>
      <AppFooter />
    </div>
  );
};
