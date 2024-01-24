import { clsx, type ClassValue } from "clsx";
import { extendTailwindMerge } from "tailwind-merge";

import uilibNamedColorsCSS from "@/styles/named-colors.css?inline";
import { extractVariables } from "@/tailwind/parser.ts";
const NAMED_COLORS = extractVariables([uilibNamedColorsCSS]);

const twMerge = extendTailwindMerge({
  extend: {
    classGroups: {
      shadow: [
        {
          shadow: ["button-focus"],
        },
      ],
      "border-color": NAMED_COLORS.filter((name) => name.startsWith("border-")),
    },
  },
});

export default function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}
