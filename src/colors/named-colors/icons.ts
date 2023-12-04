import { NamedColor } from ".";
import { base, brand, error, gray, success, warning } from "../palettes";

export const iconsNamedColors: Record<string, NamedColor> = {
  "icon-fg-brand": {
    light: brand[600],
    dark: gray[400],
  },
  "icon-fg-brand_on-brand": {
    light: brand[200],
    dark: gray[400],
  },
  // ---
  "featured-icon-light-fg-brand": {
    light: brand[600],
    dark: brand[200],
  },
  "featured-icon-light-fg-gray": {
    light: gray[500],
    dark: gray[200],
  },
  "featured-icon-light-fg-error": {
    light: error[600],
    dark: error[200],
  },
  "featured-icon-light-fg-warning": {
    light: warning[600],
    dark: warning[200],
  },
  "featured-icon-light-fg-success": {
    light: success[600],
    dark: success[200],
  },
  // ---
  "featured-icon-dark-fg-brand": {
    light: base.white,
    dark: brand[200],
  },
  "featured-icon-dark-fg-gray": {
    light: base.white,
    dark: gray[200],
  },
  "featured-icon-dark-fg-error": {
    light: base.white,
    dark: error[200],
  },
  "featured-icon-dark-fg-warning": {
    light: base.white,
    dark: warning[200],
  },
  "featured-icon-dark-fg-success": {
    light: base.white,
    dark: success[200],
  },
  // ---
  "featured-icon-modern-border": {
    light: gray[200],
    dark: gray[700],
  },
};
