import { NamedColor } from ".";
import { base, brand, gray, error } from "../palettes";

export const buttonNamedColors: Record<string, NamedColor> = {
  "button-primary-fg": {
    light: base.white,
    dark: base.white,
  },
  "button-primary-fg_hover": {
    light: base.white,
    dark: base.white,
  },
  "button-primary-bg": {
    light: brand[600],
    dark: brand[600],
  },
  "button-primary-bg_hover": {
    light: brand[700],
    dark: brand[700],
  },
  "button-primary-border": {
    light: brand[600],
    dark: brand[600],
  },
  "button-primary-border_hover": {
    light: brand[700],
    dark: brand[700],
  },
  // ---
  "button-secondary-fg": {
    light: gray[700],
    dark: gray[400],
  },
  "button-secondary-fg_hover": {
    light: gray[800],
    dark: gray[100],
  },
  "button-secondary-bg": {
    light: base.white,
    dark: gray[100],
  },
  "button-secondary-bg_hover": {
    light: gray[50],
    dark: gray[800],
  },
  "button-secondary-border": {
    light: gray[300],
    dark: gray[700],
  },
  "button-secondary-border_hover": {
    light: gray[300],
    dark: gray[700],
  },
  "button-secondary-shadow": {
    light: gray[100],
    dark: gray[800],
  },
  // ---
  "button-secondary-color-fg": {
    light: brand[700],
    dark: gray[300],
  },
  "button-secondary-color-fg_hover": {
    light: brand[800],
    dark: gray[100],
  },
  "button-secondary-color-bg": {
    light: base.white,
    dark: gray[900],
  },
  "button-secondary-color-bg_hover": {
    light: brand[50],
    dark: gray[800],
  },
  "button-secondary-color-border": {
    light: brand[300],
    dark: gray[700],
  },
  "button-secondary-color-border_hover": {
    light: brand[300],
    dark: gray[700],
  },
  "button-secondary-color-shadow": {
    light: brand[200],
    dark: gray[800],
  },
  // ---
  "button-tertiary-fg": {
    light: gray[600],
    dark: gray[400],
  },
  "button-tertiary-fg_hover": {
    light: gray[700],
    dark: gray[200],
  },
  "button-tertiary-bg_hover": {
    light: gray[50],
    dark: gray[800],
  },
  // ---
  "button-tertiary-color-fg": {
    light: brand[700],
    dark: gray[300],
  },
  "button-tertiary-color-fg_hover": {
    light: brand[800],
    dark: gray[100],
  },
  "button-tertiary-color-bg_hover": {
    light: brand[50],
    dark: gray[800],
  },
  // ---
  "button-primary-error-fg": {
    light: base.white,
    dark: base.white,
  },
  "button-primary-error-fg_hover": {
    light: base.white,
    dark: base.white,
  },
  "button-primary-error-bg": {
    light: error[600],
    dark: error[600],
  },
  "button-primary-error-bg_hover": {
    light: error[700],
    dark: error[700],
  },
  "button-primary-error-border": {
    light: error[600],
    dark: error[600],
  },
  "button-primary-error-border_hover": {
    light: error[700],
    dark: error[700],
  },
  // ---
  "button-secondary-error-fg": {
    light: error[700],
    dark: error[200],
  },
  "button-secondary-error-fg_hover": {
    light: error[800],
    dark: error[100],
  },
  "button-secondary-error-bg": {
    light: base.white,
    dark: error[950],
  },
  "button-secondary-error-bg_hover": {
    light: error[50],
    dark: error[900],
  },
  "button-secondary-error-border": {
    light: error[300],
    dark: error[800],
  },
  "button-secondary-error-border_hover": {
    light: error[300],
    dark: error[700],
  },
  // ---
  "button-tertiary-error-fg": {
    light: error[700],
    dark: error[300],
  },
  "button-tertiary-error-fg_hover": {
    light: error[800],
    dark: error[200],
  },
  "button-tertiary-error-bg_hover": {
    light: error[50],
    dark: error[900],
  },
};
