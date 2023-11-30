import { NamedColor } from ".";
import { gray, base, brand, error, warning, success } from "../palettes";

export const textNamedColors: Record<string, NamedColor> = {
  "text-primary": {
    light: gray[900],
    dark: gray[50],
    description: "Primary text such as page headings.",
  },
  "text-primary_on-brand": {
    light: base.white,
    dark: gray[50],
    description:
      "Primary text when used on solid brand color backgrounds. Commonly used for brand theme website sections (e.g. CTA sections).",
  },
  "text-secondary": {
    light: gray[700],
    dark: gray[300],
    description: "Secondary text such as labels and section headings.",
  },
  "text-secondary_hover": {
    light: gray[800],
    dark: gray[200],
    description: "Secondary text when in hover state.",
  },
  "text-secondary_on-brand": {
    light: brand[200],
    dark: gray[300],
    description:
      "Secondary text when used on solid brand color backgrounds. Commonly used for brand theme website sections (e.g. CTA sections).",
  },
  "text-tertiary": {
    light: gray[600],
    dark: gray[400],
    description:
      "Tertiary text for such as supporting text and paragraph text.",
  },
  "text-tertiary_hover": {
    light: gray[700],
    dark: gray[300],
    description: "Tertiary text when in hover state.",
  },
  "text-tertiary_on-brand": {
    light: brand[200],
    dark: gray[400],
    description:
      "Tertiary text when used on solid brand color backgrounds. Commonly used for brand theme website sections (e.g. CTA sections).",
  },
  "text-quarterary": {
    light: gray[500],
    dark: gray[400],
    description:
      "Quarterary text for more subtle and lower-contrast text, such as footer column headings.",
  },
  "text-quarterary_on-brand": {
    light: brand[300],
    dark: gray[400],
    description:
      "Quarterary text when used on solid brand color backgrounds. Commonly used for brand theme website sections (e.g. footers).",
  },
  // ---
  "text-white": {
    light: base.white,
    dark: base.white,
    description: "Text that is always white, regardless of the mode.",
  },
  "text-disabled": {
    light: gray[500],
    dark: gray[500],
    description:
      "Default color for disabled text such as disabled input fields or buttons. This can be changed to gray-400, but gray-500 is higher contrast and more accessible.",
  },
  "text-placeholder": {
    light: gray[500],
    dark: gray[400],
    description:
      "Default color for placeholder text such as input field placeholders. This can be changed to gray-400, but gray-500 is more accessible because it is higher contrast.",
  },
  "text-placeholder_subtle": {
    light: gray[300],
    dark: gray[700],
    description:
      "A more subtle (lower contrast) alternative placeholder text. Useful for components such as verification code input fields.",
  },
  // ---
  "text-brand-primary": {
    light: brand[900],
    dark: gray[50],
    description:
      "Primary brand text useful for headings (e.g. cards in pricing page headers).",
  },
  "text-brand-secondary": {
    light: brand[700],
    dark: gray[300],
    description:
      "Secondary brand text for accented text, highlights, and subheadings (e.g. subheadings in blog post cards).",
  },
  "text-brand-tertiary": {
    light: brand[600],
    dark: gray[400],
    description:
      "Tertiary brand text for lighter accented text and highlights (e.g. numbers in metric cards).",
  },
  "text-tertiary_alt": {
    light: brand[600],
    dark: gray[50],
    description:
      "An alternative to tertiary brand text that is lighter in dark mode (e.g. numbers in metric cards).",
  },
  // ---
  "text-error-primary": {
    light: error[600],
    dark: error[400],
    description:
      "Default error state semantic text color (e.g. input field error states.",
  },
  "text-warning-primary": {
    light: warning[600],
    dark: warning[400],
    description: "Default warning state semantic text color.",
  },
  "text-success-primary": {
    light: success[600],
    dark: success[400],
    description: "Default success state semantic text color.",
  },
};
