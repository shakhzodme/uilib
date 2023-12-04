import { rawNamedColors } from "@/colors/named-colors";
import { clsx, type ClassValue } from "clsx";
import { extendTailwindMerge } from "tailwind-merge";

const twMerge = extendTailwindMerge({
  extend: {
    classGroups: {
      shadow: [
        {
          shadow: ["button-focus"],
        },
      ],
      "border-color": Object.keys(rawNamedColors).filter((name) =>
        name.startsWith("border-"),
      ),
    },
  },
});

export default function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}
