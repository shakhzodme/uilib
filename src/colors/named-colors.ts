import { Color, base, brand, error, gray, success, warning } from "./palettes";

export type NamedColor = {
  light: Color;
  dark: Color;
  description?: string;
};

type NestedNamedColor = Record<string, NamedColor>;

export const namedColors: NestedNamedColor = {
  // ---
  // Text color
  // ---
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
  // ---
  // Background color
  // ---
  "bg-primary": {
    light: base.white,
    dark: gray[950],
    description:
      "The primary background color (white) used across all layouts and components.",
  },
  "bg-primary_alt": {
    light: base.white,
    dark: gray[900],
    description:
      "An alternative primary background color (white) that switches to bg-secondary when in dark mode.",
  },
  "bg-primary_hover": {
    light: gray[50],
    dark: gray[800],
    description:
      "Primary background hover color. This acts as the default hover state background color for components with white backgrounds (e.g. input dropdown menu items).",
  },
  "bg-primary-solid": {
    light: gray[950],
    dark: gray[900],
    description:
      "The primary dark background color used across layouts and components. This switches to bg-secondary when in dark mode and is useful for components such as tooltips and WYSIWYG tooltips.",
  },
  "bg-secondary": {
    light: gray[50],
    dark: gray[900],
    description:
      "The secondary background color used to create contrast against white backgrounds, such as website section backgrounds.",
  },
  "bg-secondary_alt": {
    light: gray[50],
    dark: gray[950],
    description:
      "An alternative secondary background color that switches to bg-primary when in dark mode. Useful for components such as border-style horizontal tabs.",
  },
  "bg-secondary_hover": {
    light: gray[100],
    dark: gray[800],
    description:
      "Secondary background hover color. Useful for hover states for components with gray-50 backgrounds such as active states (e.g navigation items and date pickers).",
  },
  "bg-secondary_subtle": {
    light: gray[25],
    dark: gray[900],
    description:
      "An alternative secondary background color that is slightly lighter and more subtle in light mode. This is useful for components such as banners.",
  },
  "bg-secondary-solid": {
    light: gray[600],
    dark: gray[600],
    description:
      "The secondary dark background color used across layouts and components. This is useful for components such as featured icons.",
  },
  "bg-tertiary": {
    light: gray[100],
    dark: gray[800],
    description:
      "The tertiary background color used to create contrast against light backgrounds such as toggles.",
  },
  "bg-quarterary": {
    light: gray[200],
    dark: gray[700],
    description:
      "The quarterary background color used to create contrast against light backgrounds, such as sliders and progress bars.",
  },
  // ---
  "bg-active": {
    light: gray[50],
    dark: gray[800],
    description:
      "Default active background color for components such as selected menu items in input dropdowns.",
  },
  "bg-disabled": {
    light: gray[100],
    dark: gray[800],
    description:
      "Default disabled background color for components such as disabled primary buttons and toggles.",
  },
  "bg-disabled_subtle": {
    light: gray[50],
    dark: gray[900],
    description:
      "An alternative disabled background color that is more subtle. This is useful for components such as disabled input fields and checkboxes.",
  },
  "bg-overlay": {
    light: gray[950],
    dark: gray[800],
    description:
      "Default background color for background overlays. These are useful for overlay components such as modals.",
  },
  // ---
  "bg-brand-primary": {
    light: brand[50],
    dark: brand[500],
    description:
      "The primary brand background color. Useful for components such as check icons.",
  },
  "bg-brand-primary_alt": {
    light: brand[50],
    dark: gray[800],
    description:
      "An alternative primary brand background color that switches to bg-secondary when in dark mode. Useful for components such as active horizontal tabs.",
  },
  "bg-brand-secondary": {
    light: brand[100],
    dark: brand[600],
    description:
      "The secondary brand background color. Useful for components such as featured icons.",
  },
  "bg-brand-solid": {
    light: brand[600],
    dark: brand[600],
    description:
      "Default solid (dark) brand background color. Useful for components such as toggles and messages.",
  },
  "bg-brand-solid_hover": {
    light: brand[700],
    dark: brand[500],
    description:
      "Solid brand background color when in hover state. Useful for components such as toggles.",
  },
  "bg-brand-section": {
    light: brand[800],
    dark: gray[800],
    description:
      "This is the default dark brand color background used for website sections such as CTA sections and testimonial sections. Switches to bg-secondary when in dark mode.",
  },
  "bg-brand-section_subtle": {
    light: brand[700],
    dark: gray[950],
    description:
      "An alternative brand section background color to provide contrast for website sections such as FAQ sections. Switches to bg-primary when in dark mode.",
  },
  // ---
  "bg-error-primary": {
    light: error[50],
    dark: error[500],
    description: "Primary error state background color for components.",
  },
  "bg-error-secondary": {
    light: error[100],
    dark: error[600],
    description:
      "Secondary error state background color for components such as featured icons.",
  },
  "bg-error-solid": {
    light: error[600],
    dark: error[600],
    description:
      "Default solid (dark) error state background color for components such as featured icons and metric items.",
  },
  "bg-warning-primary": {
    light: warning[50],
    dark: warning[500],
    description: "Primary warning state background color for components.",
  },
  "bg-warning-secondary": {
    light: warning[100],
    dark: warning[600],
    description:
      "Secondary warning state background color for components such as featured icons.",
  },
  "bg-warning-solid": {
    light: warning[600],
    dark: warning[600],
    description:
      "Default solid (dark) warning state background color for components such as featured icons.",
  },
  "bg-success-primary": {
    light: success[50],
    dark: success[500],
    description: "Primary success state background color for components.",
  },
  "bg-success-secondary": {
    light: success[100],
    dark: success[600],
    description:
      "Secondary success state background color for components such as featured icons.",
  },
  "bg-success-solid": {
    light: success[600],
    dark: success[600],
    description:
      "Default solid (dark) success state background color for components such as featured icons and metric items.",
  },
};
