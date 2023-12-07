import { brand, error, gray } from "./palettes";
import { Shadow, rawShadows } from "./shadows";

export const rawFocusRings: Record<string, Shadow[]> = {
  "ring-brand": [
    {
      x: 0,
      y: 0,
      blur: 0,
      spread: 4,
      color: brand[500],
      opacity: 24,
    },
  ],
  "ring-gray": [
    {
      x: 0,
      y: 0,
      blur: 0,
      spread: 4,
      color: gray[400],
      opacity: 14,
    },
  ],
  "ring-gray-secondary": [
    {
      x: 0,
      y: 0,
      blur: 0,
      spread: 4,
      color: gray[400],
      opacity: 20,
    },
  ],
  "ring-error": [
    {
      x: 0,
      y: 0,
      blur: 0,
      spread: 4,
      color: error[500],
      opacity: 24,
    },
  ],
  // ---
  "ring-brand-shadow-xs": [
    ...rawShadows.xs,
    {
      x: 0,
      y: 0,
      blur: 0,
      spread: 4,
      color: brand[500],
      opacity: 24,
    },
  ],
  "ring-brand-shadow-sm": [
    ...rawShadows.sm,
    {
      x: 0,
      y: 0,
      blur: 0,
      spread: 4,
      color: brand[500],
      opacity: 24,
    },
  ],
  "ring-gray-shadow-xs": [
    ...rawShadows.xs,
    {
      x: 0,
      y: 0,
      blur: 0,
      spread: 4,
      color: gray[400],
      opacity: 14,
    },
  ],
  "ring-gray-shadow-sm": [
    ...rawShadows.sm,
    {
      x: 0,
      y: 0,
      blur: 0,
      spread: 4,
      color: gray[400],
      opacity: 14,
    },
  ],
  "ring-gray-error-xs": [
    ...rawShadows.xs,
    {
      x: 0,
      y: 0,
      blur: 0,
      spread: 4,
      color: error[500],
      opacity: 24,
    },
  ],
};
