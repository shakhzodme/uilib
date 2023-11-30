import { NamedColor } from ".";
import { gray, brand, error } from "../palettes";

export const borderNamedColors: Record<string, NamedColor> = {
  "border-primary": {
    light: gray[300],
    dark: gray[700],
    description:
      "High contrast borders. These are used for components such as input fields, button groups, and checkboxes.",
  },
  "border-secondary": {
    light: gray[200],
    dark: gray[800],
    description:
      "Medium contrast borders. This is the most commonly used border color and is the default for most components (such as file uploaders), cards (such as tables), and content dividers.",
  },
  "border-tertiary": {
    light: gray[100],
    dark: gray[800],
    description:
      "Low contrast borders useful for very subtle dividers and borders such as line and bar chart axis dividers.",
  },
  "border-disabled": {
    light: gray[300],
    dark: gray[700],
    description:
      "Default disabled border color for disabled states in components such as input fields and checkboxes.",
  },
  "border-disabled_subtle": {
    light: gray[200],
    dark: gray[800],
    description:
      "A more subtle (lower contrast) alternative for disabled borders such as disabled buttons.",
  },
  // ---
  "border-brand": {
    light: brand[300],
    dark: brand[400],
    description:
      "Default brand border color. Useful for active states in components such as input fields.",
  },
  "border-brand-solid": {
    light: brand[600],
    dark: brand[600],
    description:
      "Default solid (dark) brand border color. Useful for active states in components such as selected checkboxes and checkbox groups.",
  },
  "border-brand-solid_alt": {
    light: brand[600],
    dark: gray[700],
    description:
      "SO FAR ONLY TWO SMALL USE CASE FOUND... An alternative for solid (dark) brand border color that switches to gray when in dark mode. Useful for components such as metric items and content quotes.",
  },
  // ---
  "border-error": {
    light: error[300],
    dark: error[400],
    description:
      "Default error state semantic border color. Useful for error states in components such as input fields.",
  },
  "border-error-solid": {
    light: error[600],
    dark: error[600],
    description:
      "Default solid (dark) error state semantic border color. Useful for error states in components such as file uploaders.",
  },
};
