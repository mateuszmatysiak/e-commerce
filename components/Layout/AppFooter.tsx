import { ThemeSelect } from "../ThemeSelect";

export const AppFooter = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="flex justify-between items-center gap-8 max-w-screen-xl w-full mx-auto p-8 bg-gray-100 border-t border-t-gray-200 dark:bg-slate-900 dark:border-t-slate-800">
      <div className="text-gray-500 text-sm">© {currentYear} eCommerce</div>

      <ThemeSelect />
    </footer>
  );
};
