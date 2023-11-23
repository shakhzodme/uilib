import COLORS from "./src/colors";

const primaryDefault = "500";
const uiColors = COLORS.flat(1).reduce((acc, val) => {
  const prefix = val[0];
  const suffix = val[1] != undefined ? "-" + val[1] : "";
  const key = prefix + suffix;
  Object.assign(acc, { [key]: val[2] });

  if (primaryDefault == val[1]) {
    Object.assign(acc, { [prefix]: val[2] });
  }

  return acc;
}, {});

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
