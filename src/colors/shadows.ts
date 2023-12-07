import { Color, gray } from "./palettes";

export type Shadow = {
  x: number;
  y: number;
  blur: number;
  spread: number;
  color: Color;
  opacity: number;
};

export const rawShadows: Record<string, Shadow[]> = {
  xs: [
    {
      x: 0,
      y: 1,
      blur: 2,
      spread: 0,
      color: gray[900],
      opacity: 5,
    },
  ],
  sm: [
    {
      x: 0,
      y: 1,
      blur: 3,
      spread: 0,
      color: gray[900],
      opacity: 10,
    },
    {
      x: 0,
      y: 1,
      blur: 2,
      spread: 0,
      color: gray[900],
      opacity: 6,
    },
  ],
  md: [
    {
      x: 0,
      y: 4,
      blur: 8,
      spread: -2,
      color: gray[900],
      opacity: 10,
    },
    {
      x: 0,
      y: 2,
      blur: 4,
      spread: -2,
      color: gray[900],
      opacity: 6,
    },
  ],
  lg: [
    {
      x: 0,
      y: 12,
      blur: 16,
      spread: -4,
      color: gray[900],
      opacity: 8,
    },
    {
      x: 0,
      y: 4,
      blur: 6,
      spread: -2,
      color: gray[900],
      opacity: 3,
    },
  ],
  xl: [
    {
      x: 0,
      y: 12,
      blur: 16,
      spread: -4,
      color: gray[900],
      opacity: 8,
    },
    {
      x: 0,
      y: 4,
      blur: 6,
      spread: -2,
      color: gray[900],
      opacity: 3,
    },
  ],
  "2xl": [
    {
      x: 0,
      y: 24,
      blur: 48,
      spread: -12,
      color: gray[900],
      opacity: 18,
    },
  ],
  "3xl": [
    {
      x: 0,
      y: 32,
      blur: 64,
      spread: -12,
      color: gray[900],
      opacity: 14,
    },
  ],
};
