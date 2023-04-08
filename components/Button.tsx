import { ButtonHTMLAttributes } from "react";

type ButtonType = "outlined" | "contained";

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant: ButtonType;
}

const BUTTON_VARIANTS: { [key in ButtonType]: string } = {
  contained: "text-white bg-blue-600 hover:bg-blue-700",
  outlined: "text-blue-600 border border-blue-600 hover:border-blue-700 hover:text-blue-700",
};

export const Button = ({ variant, className, ...restProperties }: ButtonProps) => {
  const styles = BUTTON_VARIANTS[variant];
  return <button className={`px-4 py-2 rounded-md ${styles} ${className}`} {...restProperties} />;
};
