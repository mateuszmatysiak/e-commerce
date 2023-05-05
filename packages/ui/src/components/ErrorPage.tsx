interface ErrorPageProps {
  children: string;
}

export const ErrorPage = ({ children }: ErrorPageProps) => {
  return <div className="text-xl text-gray-600 dark:text-gray-400">{children}</div>;
};
