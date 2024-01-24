import uilibColorsCSS from "@/styles/colors.css?inline";
import uilibNamedColorsCSS from "@/styles/named-colors.css?inline";
import { extractValues, extractVariables } from "@/tailwind/parser.ts";
import { hex, score as contrastScore } from "wcag-contrast";

export const COLORS: Record<string, string> = extractValues([uilibColorsCSS]);
const KEY_DIVIDER = new RegExp(
  "^[^a-zA-Z]*([a-zA-Z]+(-[a-zA-Z]+)*)[^a-zA-Z]*$",
  "g",
);
const SHADE_DIVIDER = new RegExp("(\\D*)(\\d*)$", "g");

export type Color = {
  name: string;
  value: string;
  key: string;
  shade: string;
  score: string;
  foregroundColor: string;
};
export const PALETTES: Record<string, Record<string, Color>> = Object.entries(
  extractValues([uilibColorsCSS]),
).reduce(
  (acc, val) => {
    const key = val[0].replace(KEY_DIVIDER, "$1");

    if (!(key in acc)) {
      acc[key] = {};
    }

    const shadeRaw = val[0].replace(SHADE_DIVIDER, "$2");
    const shade = shadeRaw.length > 0 ? shadeRaw : val[0];

    const score1 = hex("#FFF", val[1]);
    const score2 = hex("#000", val[1]);
    const score = contrastScore(score1 > score2 ? score1 : score2);
    const foregroundColor = score1 > score2 ? "#FFF" : "#000";

    acc[key][shade] = {
      value: val[1],
      key: "tete",
      shade,
      name: val[0],
      score,
      foregroundColor,
    };

    return acc;
  },
  {} as Record<string, Record<string, Color>>,
);
export const COLORS_REVERSED: Record<string, string> = Object.entries(
  extractValues([uilibColorsCSS]),
).reduce((acc, val) => {
  if (val[1] in acc) {
    return acc;
  }

  return Object.assign(acc, { [val[1]]: val[0] });
}, {});
export const NAMED_COLORS = extractVariables([uilibNamedColorsCSS]);
