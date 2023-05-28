const { fontFamily } = require("tailwindcss/defaultTheme");

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "../../packages/ui/*.{ts,tsx}",
    "../../packages/features/**/*.{ts,tsx}",
    "./src/pages/**/*.{ts,tsx}",
  ],
  darkMode: "class",
  theme: {
    extend: {
      fontFamily: {
        sans: ["var(--font-karla)", ...fontFamily.sans],
      },
    },
  },
  plugins: [require("@tailwindcss/aspect-ratio"), require("@tailwindcss/forms")],
};
