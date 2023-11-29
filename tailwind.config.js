import { createThemes } from "tw-colors";
import { colors } from "./src/colors/tailwind";

/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  darkMode: ["class", '[data-mode="dark"]'],
  theme: {
    colors,
    extend: {
      fontSize: {
        xs: ["12px", "18px"],
        sm: ["14px", "20px"],
        md: ["16px", "24px"],
        lg: ["18px", "28px"],
        xl: ["20px", "30px"],
        "display-xs": ["24px", "32px"],
        "display-sm": ["30px", "38px"],
        "display-md": ["36px", "44px"],
        "display-lg": ["48px", "60px"],
        "display-xl": ["60px", "72px"],
        "display-2xl": ["72px", "90px"],
      },
      spacing: {
        4.5: "1.125rem",
        5.5: "1.375rem",
      },
      boxShadow: {
        "button-focus":
          "0px 0px 0px 4px rgba(0 0 0 / 0.24), 0px 1px 2px 0px rgba(0 0 0 / 0.05)",
      },
    },
  },
  plugins: [createThemes({})],
};
