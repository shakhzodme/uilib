import { NamedColor } from ".";
import { gray, base, brand, error, warning, success } from "../palettes";

export const foregroundNamedColors: Record<string, NamedColor> = {
  "fg-primary": {
    light: gray[900],
    dark: base.white,
    description: "Highest contrast non-text foreground elements such as icons.",
  },
  "fg-secondary": {
    light: gray[700],
    dark: gray[300],
    description: "High contrast non-text foreground elements such as icons.",
  },
  "fg-secondary_hover": {
    light: gray[800],
    dark: gray[200],
    description: "Secondary foreground elements when in hover state.",
  },
  "fg-tertiary": {
    light: gray[600],
    dark: gray[400],
    description: "Medium contrast non-text foreground elements such as icons.",
  },
  "fg-tertiary_hover": {
    light: gray[700],
    dark: gray[300],
    description: "Tertiary foreground elements when in hover state.",
  },
  "fg-quarterary": {
    light: gray[500],
    dark: gray[400],
    description:
      "Medium-low contrast non-text foreground elements such as icons.",
  },
  "fg-quarterary_hover": {
    light: gray[600],
    dark: gray[300],
    description: "Quarterary foreground elements when in hover state.",
  },
  "fg-quinary": {
    light: gray[400],
    dark: gray[500],
    description:
      "Low contrast non-text foreground elements such as help icons.",
  },
  "fg-quinary_hover": {
    light: gray[500],
    dark: gray[400],
    description:
      "Quinary foreground elements when in hover state, such as help icons.",
  },
  "fg-senary": {
    light: gray[300],
    dark: gray[600],
    description:
      "Lowest contrast non-text foreground elements such as breadcrumb divider icons and vector map. Used very sparingly.",
  },
  // ---
  "fg-white": {
    light: base.white,
    dark: base.white,
    description:
      "Foreground elements that are always white, regardless of the mode.",
  },
  "fg-disabled": {
    light: gray[400],
    dark: gray[500],
    description:
      "Default color for disabled non-text foreground elements such as icons in disabled button group buttons and input dropdown menu items.",
  },
  "fg-disabled_subtle": {
    light: gray[300],
    dark: gray[600],
    description:
      "A more subtle (lower contrast) alternative for non-text disabled foreground elements such as disabled active checkboxes and tag checkboxes.",
  },
  // ---
  "fg-brand-primary": {
    light: brand[600],
    dark: brand[500],
    description:
      "Primary brand color non-text foreground elements such as featured icons and progress bars.",
  },
  "fg-brand-primary_alt": {
    light: brand[600],
    dark: gray[300],
    description:
      "An alternative for primary brand color non-text foreground elements that switches to gray when in dark mode such as active horizontal tabs.",
  },
  "fg-brand-secondary": {
    light: brand[500],
    dark: brand[500],
    description:
      "Secondary brand color non-text foreground elements such as accents and arrows in marketing site sections (e.g. hero header sections).",
  },
  // ---
  "fg-error-primary": {
    light: error[600],
    dark: error[500],
    description:
      "Primary error state color for non-text foreground elements such as featured icons.",
  },
  "fg-error-secondary": {
    light: error[500],
    dark: error[400],
    description:
      "Secondary error state color for non-text foreground elements such as icons in error state input fields and negative metrics item charts and icons.",
  },
  "fg-warning-primary": {
    light: warning[600],
    dark: warning[500],
    description:
      "Primary warning state color for non-text foreground elements such as featured icons.",
  },
  "fg-warning-secondary": {
    light: warning[500],
    dark: warning[400],
    description:
      "Secondary warning state color for non-text foreground elements.",
  },
  "fg-success-primary": {
    light: success[500],
    dark: success[600],
    description:
      "Primary success state color for non-text foreground elements such as featured icons.",
  },
  "fg-success-secondary": {
    light: success[500],
    dark: success[400],
    description:
      "Secondary success state color for non-text foreground elements such as button dots, avatar online indicator dots, and negative metrics item charts and icons.",
  },
};
