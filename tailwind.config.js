import { namedColors } from "./src/tailwind/colors";
import { shadows } from "./src/tailwind/shadows";
import { fontSize } from "./src/tailwind/fontSize";

/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  darkMode: ["class", '[data-theme="dark"]'],
  theme: {
    fontSize,
    boxShadow: shadows,
    extend: {
      spacing: {
        4.5: "1.125rem",
        5.5: "1.375rem",
      },
    },
  },
  plugins: [namedColors],
};
