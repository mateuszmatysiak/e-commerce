interface EmptyPageProps {
  children: string;
}

export const EmptyPage = ({ children }: EmptyPageProps) => {
  return <div className="text-xl text-gray-600 dark:text-gray-400">{children}</div>;
};
