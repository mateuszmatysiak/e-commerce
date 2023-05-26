import { twMerge } from "tailwind-merge";

interface ButtonProps extends React.ComponentProps<"button"> {}

export const Button = ({ className = "", ...restProperties }: ButtonProps) => {
  const c = twMerge(`rounded-md bg-blue-600 px-4 py-2 text-white hover:bg-blue-700`, className);
  return <button className={c} {...restProperties} />;
};
