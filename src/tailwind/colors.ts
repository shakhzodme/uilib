import { TwcConfig, TwcOptions, resolveTwcConfig } from "tw-colors";
import { defaultColors } from "../colors";
import { NamedColor, rawNamedColors } from "../colors/named-colors";
import { Color } from "../colors/palettes";

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

const emptyConfig: TwcConfig = {};
const createThemes = <ThemeName extends string>(
  config: TwcConfig<ThemeName> = emptyConfig,
  options: TwcOptions<ThemeName> = {},
) => {
  const resolved = resolveTwcConfig(config, options);

  const textColor = Object.keys(resolved.colors)
    .filter((key) => key.startsWith("text-"))
    .reduce(
      (acc: object, key) =>
        Object.assign(acc, {
          [key.slice("text-".length)]: resolved.colors[key],
        }),
      {},
    );

  const backgroundColor = Object.keys(resolved.colors)
    .filter((key) => key.startsWith("bg-"))
    .reduce(
      (acc: object, key) =>
        Object.assign(acc, {
          [key.slice("bg-".length)]: resolved.colors[key],
        }),
      {},
    );

  const borderColor = Object.keys(resolved.colors)
    .filter((key) => key.startsWith("border-"))
    .reduce(
      (acc: object, key) =>
        Object.assign(acc, {
          [key.slice("border-".length)]: resolved.colors[key],
        }),
      {},
    );

  const finalColors = Object.keys(resolved.colors)
    .filter(
      (key) =>
        !["text-", "bg-", "border-"].some((ignore) => key.startsWith(ignore)),
    )
    .reduce(
      (acc: object, key) => Object.assign(acc, { [key]: resolved.colors[key] }),
      {},
    );

  Object.keys(colors).forEach((key) =>
    Object.assign(finalColors, { [key]: colors[key] }),
  );

  return {
    resolved,
    textColor,
    backgroundColor,
    borderColor,
    colors: finalColors,
  };

  // return plugin(
  //   ({ addUtilities, addVariant }) => {
  //     // add the css variables to "@layer utilities" because:
  //     // - The Base layer does not provide intellisense
  //     // - The Components layer might get overriden by tailwind default colors in case of name clash
  //     addUtilities(resolved.utilities);
  //     // add the theme as variant e.g. "theme-[name]:text-2xl"
  //     resolved.variants.forEach(({ name, definition }) =>
  //       addVariant(name, definition),
  //     );
  //   },
  //   // extend the colors config
  //   {
  //     theme: {
  //       extend: {
  //         textColor,
  //         backgroundColor,
  //         borderColor,
  //         colors: finalColors,
  //       },
  //     },
  //   },
  // );
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
