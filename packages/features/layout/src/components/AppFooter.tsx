import { ThemeSelect } from "./ThemeSelect";

export const AppFooter = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="mx-auto flex w-full max-w-screen-xl items-center justify-between gap-8 border-t border-t-gray-200 bg-gray-100 p-8 dark:border-t-slate-800 dark:bg-slate-900">
      <div className="text-sm text-gray-500">© {currentYear} Sklep internetowy</div>

      <ThemeSelect />
    </footer>
  );
};
