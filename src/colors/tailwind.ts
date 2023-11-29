import { createThemes } from "tw-colors";
import { defaultColors } from ".";
import { NamedColor, rawNamedColors } from "./named-colors";
import { Color } from "./palettes";

export const colors = defaultColors
  .map((palette: Record<string, Color>) => {
    const keys = Object.keys(palette);
    const output: Record<string, string> = {};

    keys.forEach((key) => {
      const color: Color = palette[key];
      output[color.name] = color.code;
    });

    return output;
  })
  .reduce((acc, val) => Object.assign(acc, val), {});

const extractColorProperty = (
  colors: Record<string, NamedColor>,
  property: "light" | "dark",
) => {
  return Object.keys(colors).reduce((acc, key) => {
    const color = colors[key];
    return Object.assign(acc, { [key]: color[property].code });
  }, {});
};

export const namedColors = createThemes(
  {
    light: extractColorProperty(rawNamedColors, "light"),
    dark: extractColorProperty(rawNamedColors, "dark"),
  },
  {
    defaultTheme: "light",
  },
);
