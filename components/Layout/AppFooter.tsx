import { ThemeSelect } from "../ThemeSelect";

export const AppFooter = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="p-8 pt-0 bg-gray-100 dark:bg-slate-900">
      <div className="flex justify-between items-center gap-8 h-full max-w-screen-xl m-auto pt-8 border-t border-t-gray-200 dark:border-t-slate-800">
        <div className="text-gray-500 text-sm">© {currentYear} eCommerce. All rights reserved.</div>

        <ThemeSelect />
      </div>
    </footer>
  );
};
