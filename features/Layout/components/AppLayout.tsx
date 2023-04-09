import { Karla } from "next/font/google";
import { PropsWithChildren } from "react";

import { AppFooter } from "./AppFooter";
import { AppHeader } from "./AppHeader";
import { AppMain } from "./AppMain";

const karla = Karla({
  subsets: ["latin"],
  variable: "--font-karla",
});

type AppLayoutProps = PropsWithChildren;

export const AppLayout = ({ children }: AppLayoutProps) => {
  return (
    <div className={`min-h-screen flex flex-col ${karla.variable} font-sans`}>
      <AppHeader />
      <AppMain>{children}</AppMain>
      <AppFooter />
    </div>
  );
};
