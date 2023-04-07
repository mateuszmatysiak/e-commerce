import { Karla } from "next/font/google";
import { FC, PropsWithChildren } from "react";
import { AppHeader } from "./AppHeader";

const karla = Karla({
  subsets: ["latin"],
  variable: "--font-karla",
});

export const AppLayout: FC<PropsWithChildren> = ({ children }) => {
  return (
    <div className={`${karla.variable} font-sans`}>
      <AppHeader />
      <main className="p-8 pt-16">{children}</main>
    </div>
  );
};
