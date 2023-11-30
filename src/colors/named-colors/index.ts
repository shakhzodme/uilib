import { backgroundNamedColors } from "./background";
import { borderNamedColors } from "./border";
import { buttonNamedColors } from "./button";
import { foregroundNamedColors } from "./foreground";
import { textNamedColors } from "./text";
import { type NamedColor } from "./type";

export { type NamedColor } from "./type";

export const rawNamedColors: Record<string, NamedColor> = {
  ...textNamedColors,
  ...borderNamedColors,
  ...foregroundNamedColors,
  ...backgroundNamedColors,
  ...buttonNamedColors,
};
