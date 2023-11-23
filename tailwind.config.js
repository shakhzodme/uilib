import COLORS from "./src/colors";

const uiColors = COLORS.flat(1).reduce(
  (acc, val) => Object.assign(acc, { [val[0]]: val[2] }),
  {},
);

/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  darkMode: ["class", '[data-mode="dark"]'],
  theme: {
    extend: {},
    colors: uiColors,
  },
  plugins: [],
};
