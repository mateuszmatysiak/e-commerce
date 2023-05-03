interface ButtonProps extends React.ComponentProps<"button"> {}

export const Button = ({ className = "", ...restProperties }: ButtonProps) => {
  return (
    <button
      className={`px-4 py-2 rounded-md text-white bg-blue-600 hover:bg-blue-700 ${className}`}
      {...restProperties}
    />
  );
};