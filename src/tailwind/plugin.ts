import plugin from "tailwindcss/plugin";
import { namedColors } from "./colors";
import { fontSize } from "./fontSize";
import { shadows } from "./shadows";

export default function uilibTailwind() {
  return plugin(
    ({ addUtilities, addVariant }) => {
      // add the css variables to "@layer utilities" because:
      // - The Base layer does not provide intellisense
      // - The Components layer might get overriden by tailwind default colors in case of name clash
      addUtilities(namedColors.resolved.utilities);
      // add the theme as variant e.g. "theme-[name]:text-2xl"
      namedColors.resolved.variants.forEach(({ name, definition }) =>
        addVariant(name, definition),
      );
    },
    {
      darkMode: ["class", '[data-theme="dark"]'],
      theme: {
        fontSize,
        boxShadow: shadows,
        extend: {
          spacing: {
            4.5: "1.125rem",
            5.5: "1.375rem",
          },
          textColor: namedColors.textColor,
          backgroundColor: namedColors.backgroundColor,
          borderColor: namedColors.borderColor,
          colors: namedColors.colors,
        },
      },
    },
  );
}
