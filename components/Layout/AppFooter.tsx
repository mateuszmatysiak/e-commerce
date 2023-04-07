import { ThemeSelect } from "../ThemeSelect";

export const AppFooter = () => {
  return (
    <footer className="p-8 bg-gray-100 border-t border-t-gray-200 dark:bg-slate-950 dark:border-t-slate-800">
      <div className="flex justify-end items-center gap-8 h-full max-w-screen-xl m-auto">
        <ThemeSelect />
      </div>
    </footer>
  );
};
