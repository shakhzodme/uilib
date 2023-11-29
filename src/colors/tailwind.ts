import { defaultColors } from ".";
// import { namedColors as rawNamedColors } from "./named-colors";
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

// export const namedColors = Object.keys(rawNamedColors).reduce((acc, key) => Object.assign(acc, {}))
