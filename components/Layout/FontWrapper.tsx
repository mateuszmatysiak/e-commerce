import { Karla } from "next/font/google";
import { FC, PropsWithChildren } from "react";

const karla = Karla({
  subsets: ["latin"],
  variable: "--font-karla",
});

export const FontWrapper: FC<PropsWithChildren> = ({ children }) => {
  return <div className={`${karla.variable} font-sans`}>{children}</div>;
};
