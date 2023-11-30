import {
  base,
  blue,
  blueDark,
  blueLight,
  brand,
  cyan,
  error,
  fuchsia,
  gray,
  grayBlue,
  grayCool,
  grayIron,
  grayModern,
  grayNeutral,
  grayTrue,
  grayWarm,
  green,
  greenLight,
  indigo,
  moss,
  orange,
  orangeDark,
  pink,
  purple,
  rose,
  success,
  teal,
  violet,
  warning,
  yellow,
} from "./palettes";

export const primaryColors = [base, gray, brand, error, warning, success];

export const secondaryColors = [
  grayBlue,
  grayCool,
  grayModern,
  grayNeutral,
  grayIron,
  grayTrue,
  grayWarm,
  moss,
  greenLight,
  green,
  teal,
  cyan,
  blueLight,
  blue,
  blueDark,
  indigo,
  violet,
  purple,
  fuchsia,
  pink,
  rose,
  orangeDark,
  orange,
  yellow,
];

export const defaultColors = [...primaryColors, ...secondaryColors] as const;