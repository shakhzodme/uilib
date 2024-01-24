import plugin from "tailwindcss/plugin";
import { fontSize } from "./fontSize";
import { shadows } from "./shadows";
import animatePlugin from "tailwindcss-animate";
import fs from "fs";
import { extractVariables } from "./parser";
import { type Config as TwConfig } from "tailwindcss";

const uilibColorsCSS = fs.readFileSync("./src/styles/colors.css");
const uilibNamedColorsCSS = fs.readFileSync("./src/styles/named-colors.css");

type Config = NonNullable<TwConfig["theme"]>;

export default function uilibTailwind() {
  const textColor: Config["textColor"] = {};
  const backgroundColor: Config["backgroundColor"] = {};
  const borderColor: Config["borderColor"] = {};
  const colors: Config["colors"] = {};

  extractVariables([uilibColorsCSS]).forEach((color) => {
    textColor[color] = `var(--${color})`;
    backgroundColor[color] = `var(--${color})`;
    borderColor[color] = `var(--${color})`;
    colors[color] = `var(--${color})`;
  });

  extractVariables([uilibNamedColorsCSS]).forEach((color) => {
    if (color.startsWith("text-")) {
      textColor[color.slice(5)] = `var(--${color})`;
      return;
    }

    if (color.startsWith("bg-")) {
      backgroundColor[color.slice(3)] = `var(--${color})`;
      return;
    }

    if (color.startsWith("border-")) {
      borderColor[color.slice(7)] = `var(--${color})`;
      return;
    }

    colors[color] = `var(--${color})`;
  });

  return plugin(
    // ({ addUtilities, addVariant })
    () => {},
    {
      darkMode: ["class", '[data-theme="dark"]'],
      theme: {
        fontSize,
        boxShadow: shadows,
        colors,
        textColor,
        backgroundColor,
        borderColor,
        extend: {
          spacing: {
            4.5: "1.125rem",
            5.5: "1.375rem",
          },
        },
      },
      plugins: [animatePlugin],
    },
  );
}
