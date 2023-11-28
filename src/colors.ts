// name , shade?, code   , WCAG 2.1 contrast ratio, text color
// white, 100   , #FFFFFF, AAA 21.1               , #000000

export type Color = [string, string | undefined, string, string, string];

export const base: Color[] = [
  ["white", undefined, "#FFFFFF", "AAA 21.1", "#000000"],
  ["black", undefined, "#000000", "AAA 21.1", "#FFFFFF"],
];

export const gray: Color[] = [
  ["gray", "25", "#FCFCFD", "AAA 7.49", "#475467"],
  ["gray", "50", "#F9FAFB", "AAA 7.35", "#475467"],
  ["gray", "100", "#F2F4F7", "AA 6.97", "#475467"],
  ["gray", "200", "#EAECF0", "AA 6.49", "#475467"],
  ["gray", "300", "#D0D5DD", "AA 5.21", "#475467"],
  ["gray", "400", "#98A2B3", "2.58", "#FFFFFF"],
  ["gray", "500", "#667085", "AA 4.95", "#FFFFFF"],
  ["gray", "600", "#475467", "AAA 7.65", "#FFFFFF"],
  ["gray", "700", "#344054", "AAA 10.41", "#FFFFFF"],
  ["gray", "800", "#182230", "AAA 16.02", "#FFFFFF"],
  ["gray", "900", "#101828", "AAA 17.79", "#FFFFFF"],
  ["gray", "950", "#0C111D", "AAA 18.84", "#FFFFFF"],
];

export const brand: Color[] = [
  ["brand", "25", "#FCFAFF", "AA 6.39", "#6941C6"],
  ["brand", "50", "#F9F5FF", "AA 6.16", "#6941C6"],
  ["brand", "100", "#F4EBFF", "AA 5.74", "#6941C6"],
  ["brand", "200", "#E9D7FE", "AA 4.93", "#6941C6"],
  ["brand", "300", "#D6BBFB", "3.89", "#6941C6"],
  ["brand", "400", "#B692F6", "2.49", "#FFFFFF"],
  ["brand", "500", "#9E77ED", "3.33", "#FFFFFF"],
  ["brand", "600", "#7F56D9", "AA 4.96", "#FFFFFF"],
  ["brand", "700", "#6941C6", "AA 6.63", "#FFFFFF"],
  ["brand", "800", "#53389E", "AAA 8.67", "#FFFFFF"],
  ["brand", "900", "#42307D", "AAA 10.78", "#FFFFFF"],
  ["brand", "950", "#2C1C5F", "AAA 14.66", "#FFFFFF"],
];

export const error: Color[] = [
  ["error", "25", "#FFFBFA", "AA 6.4", "#B42318"],
  ["error", "50", "#FEF3F2", "AA 6.06", "#B42318"],
  ["error", "100", "#FEE4E2", "AA 5.4", "#B42318"],
  ["error", "200", "#FECDCA", "AA 4.56", "#B42318"],
  ["error", "300", "#FDA29B", "3.38", "#B42318"],
  ["error", "400", "#F97066", "2.78", "#FFFFFF"],
  ["error", "500", "#F04438", "3.76", "#FFFFFF"],
  ["error", "600", "#D92D20", "AA 4.82", "#FFFFFF"],
  ["error", "700", "#B42318", "AA 6.60", "#FFFFFF"],
  ["error", "800", "#912018", "AAA 8.70", "#FFFFFF"],
  ["error", "900", "#7A271A", "AAA 9.86", "#FFFFFF"],
  ["error", "950", "#55160C", "AAA 13.97", "#FFFFFF"],
];

export const warning: Color[] = [
  ["warning", "25", "#FFFCF5", "AA 5.28", "#B54708"],
  ["warning", "50", "#FFFAEB", "AA 5.17", "#B54708"],
  ["warning", "100", "#FEF0C7", "AA 4.75", "#B54708"],
  ["warning", "200", "#FEDF89", "4.15", "#B54708"],
  ["warning", "300", "#FEC84B", "3.50", "#B54708"],
  ["warning", "400", "#FDB022", "1.84", "#FFFFFF"],
  ["warning", "500", "#F79009", "2.34", "#FFFFFF"],
  ["warning", "600", "#DC6803", "3.49", "#FFFFFF"],
  ["warning", "700", "#B54708", "AA 5.40", "#FFFFFF"],
  ["warning", "800", "#93370D", "AAA 7.49", "#FFFFFF"],
  ["warning", "900", "#7A2E0E", "AAA 9.48", "#FFFFFF"],
  ["warning", "950", "#4E1D09", "AAA 13.92", "#FFFFFF"],
];

export const success: Color[] = [
  ["success", "25", "#F6FEF9", "AA 5.51", "#067647"],
  ["success", "50", "#ECFDF3", "AA 5.36", "#067647"],
  ["success", "100", "#DCFAE6", "AA 5.07", "#067647"],
  ["success", "200", "#ABEFC6", "4.27", "#067647"],
  ["success", "300", "#75E0A7", "3.51", "#067647"],
  ["success", "400", "#47CD89", "2.03", "#FFFFFF"],
  ["success", "500", "#17B26A", "2.76", "#FFFFFF"],
  ["success", "600", "#079455", "3.91", "#FFFFFF"],
  ["success", "700", "#067647", "AA 5.66", "#FFFFFF"],
  ["success", "800", "#085D3A", "AAA 7.92", "#FFFFFF"],
  ["success", "900", "#074D31", "AAA 9.95", "#FFFFFF"],
  ["success", "950", "#053321", "AAA 13.93", "#FFFFFF"],
];

export const grayBlue: Color[] = [
  ["gray-blue", "25", "#FCFCFD", "AAA 8.39", "#363F72"],
  ["gray-blue", "50", "#F8F9FC", "AAA 8.17", "#363F72"],
  ["gray-blue", "100", "#EAECF5", "AAA 7.30", "#363F72"],
  ["gray-blue", "200", "#D5D9EB", "AA 6.13", "#363F72"],
  ["gray-blue", "300", "#B3B8DB", "4.42", "#363F72"],
  ["gray-blue", "400", "#717BBC", "4.01", "#FFFFFF"],
  ["gray-blue", "500", "#4E5BA6", "AA 6.24", "#FFFFFF"],
  ["gray-blue", "600", "#3E4784", "AAA 8.59", "#FFFFFF"],
  ["gray-blue", "700", "#363F72", "AAA 9.99", "#FFFFFF"],
  ["gray-blue", "800", "#293056", "AAA 12.72", "#FFFFFF"],
  ["gray-blue", "900", "#101323", "AAA 18.43", "#FFFFFF"],
  ["gray-blue", "950", "#0D0F1C", "AAA 19.04", "#FFFFFF"],
];

export const grayCool: Color[] = [
  ["gray-cool", "25", "#FCFCFD", "AAA 7.15", "#404968"],
  ["gray-cool", "50", "#F9F9FB", "AA 6.97", "#404968"],
  ["gray-cool", "100", "#EFF1F5", "AA 6.48", "#404968"],
  ["gray-cool", "200", "#DCDFEA", "AA 5.51", "#404968"],
  ["gray-cool", "300", "#B9C0D4", "4.03", "#404968"],
  ["gray-cool", "400", "#7D89B0", "3.45", "#FFFFFF"],
  ["gray-cool", "500", "#5D6B98", "AA 5.24", "#FFFFFF"],
  ["gray-cool", "600", "#4A5578", "AAA 7.37", "#FFFFFF"],
  ["gray-cool", "700", "#404968", "AAA 8.82", "#FFFFFF"],
  ["gray-cool", "800", "#30374F", "AAA 11.71", "#FFFFFF"],
  ["gray-cool", "900", "#111322", "AAA 18.36", "#FFFFFF"],
  ["gray-cool", "950", "#0E101B", "AAA 18.99", "#FFFFFF"],
];

export const grayModern: Color[] = [
  ["gray-modern", "25", "#FCFCFD", "AAA 7.35", "#364152"],
  ["gray-modern", "50", "#F8FAFC", "AA 7.20", "#364152"],
  ["gray-modern", "100", "#EEF2F6", "AA 6.69", "#364152"],
  ["gray-modern", "200", "#E3E8EF", "AA 6.12", "#364152"],
  ["gray-modern", "300", "#CDD5DF", "AA 5.08", "#364152"],
  ["gray-modern", "400", "#9AA4B2", "2.53", "#FFFFFF"],
  ["gray-modern", "500", "#697586", "AA 4.69", "#FFFFFF"],
  ["gray-modern", "600", "#4B5565", "AAA 7.51", "#FFFFFF"],
  ["gray-modern", "700", "#364152", "AAA 10.31", "#FFFFFF"],
  ["gray-modern", "800", "#202939", "AAA 14.60", "#FFFFFF"],
  ["gray-modern", "900", "#121926", "AAA 17.67", "#FFFFFF"],
  ["gray-modern", "950", "#0D121C", "AAA 18.76", "#FFFFFF"],
];

export const grayNeutral: Color[] = [
  ["gray-neutral", "25", "#FCFCFD", "AAA 7.18", "#384250"],
  ["gray-neutral", "50", "#F9FAFB", "AAA 7.04", "#384250"],
  ["gray-neutral", "100", "#F3F4F6", "AA 6.69", "#384250"],
  ["gray-neutral", "200", "#E5E7EB", "AA 5.94", "#384250"],
  ["gray-neutral", "300", "#D2D6DB", "AA 5.04", "#384250"],
  ["gray-neutral", "400", "#9DA4AE", "AA 2.52", "#FFFFFF"],
  ["gray-neutral", "500", "#6C737F", "AA 4.78", "#FFFFFF"],
  ["gray-neutral", "600", "#4D5761", "AAA 7.40", "#FFFFFF"],
  ["gray-neutral", "700", "#384250", "AAA 10.19", "#FFFFFF"],
  ["gray-neutral", "800", "#1F2A37", "AAA 14.55", "#FFFFFF"],
  ["gray-neutral", "900", "#111927", "AAA 17.64", "#FFFFFF"],
  ["gray-neutral", "950", "#0D121C", "AAA 18.74", "#FFFFFF"],
];

export const grayIron: Color[] = [
  ["gray-iron", "25", "#FCFCFC", "AAA 7.54", "#3F3F46"],
  ["gray-iron", "50", "#FAFAFA", "AAA 7.42", "#3F3F46"],
  ["gray-iron", "100", "#F4F4F5", "AAA 7.04", "#3F3F46"],
  ["gray-iron", "200", "#E4E4E7", "AA 6.1", "#3F3F46"],
  ["gray-iron", "300", "#D1D1D6", "AA 5.09", "#3F3F46"],
  ["gray-iron", "400", "#A0A0AB", "2.58", "#FFFFFF"],
  ["gray-iron", "500", "#70707B", "AA 4.89", "#FFFFFF"],
  ["gray-iron", "600", "#51525C", "AAA 7.77", "#FFFFFF"],
  ["gray-iron", "700", "#3F3F46", "AAA 10.48", "#FFFFFF"],
  ["gray-iron", "800", "#26272B", "AAA 14.96", "#FFFFFF"],
  ["gray-iron", "900", "#18181B", "AAA 17.74", "#FFFFFF"],
  ["gray-iron", "950", "#131316", "AAA 18.54", "#FFFFFF"],
];

export const grayTrue: Color[] = [
  ["gray-true", "25", "#FCFCFC", "AAA 7.61", "#424242"],
  ["gray-true", "50", "#FAFAFA", "AAA 7.48", "#424242"],
  ["gray-true", "100", "#F5F5F5", "AAA 7.16", "#424242"],
  ["gray-true", "200", "#E5E5E5", "AA 6.20", "#424242"],
  ["gray-true", "300", "#D6D6D6", "AA 5.37", "#424242"],
  ["gray-true", "400", "#A3A3A3", "2.52", "#FFFFFF"],
  ["gray-true", "500", "#737373", "AA 4.74", "#FFFFFF"],
  ["gray-true", "600", "#525252", "AAA 7.81", "#FFFFFF"],
  ["gray-true", "700", "#424242", "AAA 10.00", "#FFFFFF"],
  ["gray-true", "800", "#292929", "AAA 14.59", "#FFFFFF"],
  ["gray-true", "900", "#141414", "AAA 18.36", "#FFFFFF"],
  ["gray-true", "950", "#0F0F0F", "AAA 19.13", "#FFFFFF"],
];

export const grayWarm: Color[] = [
  ["gray-warm", "25", "#FDFDFC", "AAA 7.49", "#44403C"],
  ["gray-warm", "50", "#FAFAF9", "AAA 7.30", "#44403C"],
  ["gray-warm", "100", "#F5F5F4", "AA 6.99", "#44403C"],
  ["gray-warm", "200", "#E7E5E4", "AA 6.07", "#44403C"],
  ["gray-warm", "300", "#D7D3D0", "AA 5.12", "#44403C"],
  ["gray-warm", "400", "#A9A29D", "2.53", "#FFFFFF"],
  ["gray-warm", "500", "#79716B", "AA 4.81", "#FFFFFF"],
  ["gray-warm", "600", "#57534E", "AAA 7.64", "#FFFFFF"],
  ["gray-warm", "700", "#44403C", "AAA 10.28", "#FFFFFF"],
  ["gray-warm", "800", "#292524", "AAA 15.19", "#FFFFFF"],
  ["gray-warm", "900", "#1C1917", "AAA 17.50", "#FFFFFF"],
  ["gray-warm", "950", "#171412", "AAA 18.36", "#FFFFFF"],
];

export const moss: Color[] = [
  ["moss", "25", "#FAFDF7", "AA 6.87", "#3F621A"],
  ["moss", "50", "#F5FBEE", "AA 6.68", "#3F621A"],
  ["moss", "100", "#E6F4D7", "AA 6.16", "#3F621A"],
  ["moss", "200", "#CEEAB0", "AA 5.39", "#3F621A"],
  ["moss", "300", "#ACDC79", "4.46", "#3F621A"],
  ["moss", "400", "#86CB3C", "1.98", "#FFFFFF"],
  ["moss", "500", "#669F2A", "3.21", "#FFFFFF"],
  ["moss", "600", "#4F7A21", "AA 5.05", "#FFFFFF"],
  ["moss", "700", "#3F621A", "AAA 7.06", "#FFFFFF"],
  ["moss", "800", "#335015", "AAA 9.15", "#FFFFFF"],
  ["moss", "900", "#2B4212", "AAA 11.06", "#FFFFFF"],
  ["moss", "950", "#1A280B", "AAA 15.49", "#FFFFFF"],
];

export const greenLight: Color[] = [
  ["green-light", "25", "#FAFEF5", "AA 5.07", "#3B7C0F"],
  ["green-light", "50", "#F3FEE7", "AA 4.94", "#3B7C0F"],
  ["green-light", "100", "#E4FBCC", "AA 4.66", "#3B7C0F"],
  ["green-light", "200", "#D0F8AB", "4.33", "#3B7C0F"],
  ["green-light", "300", "#A6EF67", "3.72", "#3B7C0F"],
  ["green-light", "400", "#85E13A", "1.63", "#FFFFFF"],
  ["green-light", "500", "#66C61C", "2.18", "#FFFFFF"],
  ["green-light", "600", "#4CA30D", "3.21", "#FFFFFF"],
  ["green-light", "700", "#3B7C0F", "AA 5.16", "#FFFFFF"],
  ["green-light", "800", "#326212", "AAA 7.26", "#FFFFFF"],
  ["green-light", "900", "#2B5314", "AAA 8.93", "#FFFFFF"],
  ["green-light", "950", "#15290A", "AAA 15.49", "#FFFFFF"],
];

export const green: Color[] = [
  ["green", "25", "#F6FEF9", "AA 5.69", "#087443"],
  ["green", "50", "#EDFCF2", "AA 5.53", "#087443"],
  ["green", "100", "#D3F8DF", "AA 5.10", "#087443"],
  ["green", "200", "#AAF0C4", "4.45", "#087443"],
  ["green", "300", "#73E2A3", "3.65", "#087443"],
  ["green", "400", "#3CCB7F", "2.09", "#FFFFFF"],
  ["green", "500", "#16B364", "2.74", "#FFFFFF"],
  ["green", "600", "#099250", "4.02", "#FFFFFF"],
  ["green", "700", "#087443", "AA 5.85", "#FFFFFF"],
  ["green", "800", "#095C37", "AAA 8.10", "#FFFFFF"],
  ["green", "900", "#084C2E", "AAA 10.13", "#FFFFFF"],
  ["green", "950", "#052E1C", "AAA 14.86", "#FFFFFF"],
];

export const teal: Color[] = [
  ["teal", "25", "#F6FEFC", "AA 5.42", "#107569"],
  ["teal", "50", "#F0FDF9", "AA 5.33", "#107569"],
  ["teal", "100", "#CCFBEF", "AA 4.92", "#107569"],
  ["teal", "200", "#99F6E0", "4.39", "#107569"],
  ["teal", "300", "#5FE9D0", "3.72", "#107569"],
  ["teal", "400", "#2ED3B7", "1.89", "#FFFFFF"],
  ["teal", "500", "#15B79E", "2.54", "#FFFFFF"],
  ["teal", "600", "#0E9384", "3.79", "#FFFFFF"],
  ["teal", "700", "#107569", "AA 5.57", "#FFFFFF"],
  ["teal", "800", "#125D56", "AAA 7.68", "#FFFFFF"],
  ["teal", "900", "#134E48", "AAA 9.55", "#FFFFFF"],
  ["teal", "950", "#0A2926", "AAA 15.50", "#FFFFFF"],
];

export const cyan: Color[] = [
  ["cyan", "25", "#F5FEFF", "AA 5.52", "#0E7090"],
  ["cyan", "50", "#ECFDFF", "AA 5.41", "#0E7090"],
  ["cyan", "100", "#CFF9FE", "AA 5.00", "#0E7090"],
  ["cyan", "200", "#A5F0FC", "4.44", "#0E7090"],
  ["cyan", "300", "#67E3F9", "3.72", "#0E7090"],
  ["cyan", "400", "#22CCEE", "1.92", "#FFFFFF"],
  ["cyan", "500", "#06AED4", "2.61", "#FFFFFF"],
  ["cyan", "600", "#088AB2", "3.96", "#FFFFFF"],
  ["cyan", "700", "#0E7090", "AA 5.65", "#FFFFFF"],
  ["cyan", "800", "#155B75", "AAA 7.50", "#FFFFFF"],
  ["cyan", "900", "#164C63", "AAA 9.35", "#FFFFFF"],
  ["cyan", "950", "#0D2D3A", "AAA 14.47", "#FFFFFF"],
];

export const blueLight: Color[] = [
  ["blue-light", "25", "#F5FBFF", "AA 5.60", "#026AA2"],
  ["blue-light", "50", "#F0F9FF", "AA 5.48", "#026AA2"],
  ["blue-light", "100", "#E0F2FE", "AA 5.09", "#026AA2"],
  ["blue-light", "200", "#B9E6FE", "4.39", "#026AA2"],
  ["blue-light", "300", "#7CD4FD", "3.53", "#026AA2"],
  ["blue-light", "400", "#36BFFA", "2.10", "#FFFFFF"],
  ["blue-light", "500", "#0BA5EC", "2.77", "#FFFFFF"],
  ["blue-light", "600", "#0086C9", "4.00", "#FFFFFF"],
  ["blue-light", "700", "#026AA2", "AA 5.85", "#FFFFFF"],
  ["blue-light", "800", "#065986", "AAA 7.52", "#FFFFFF"],
  ["blue-light", "900", "#0B4A6F", "AAA 9.41", "#FFFFFF"],
  ["blue-light", "950", "#062C41", "AAA 14.61", "#FFFFFF"],
];

export const blue: Color[] = [
  ["blue", "25", "#F5FAFF", "AA 5.68", "#175CD3"],
  ["blue", "50", "#EFF8FF", "AA 5.55", "#175CD3"],
  ["blue", "100", "#D1E9FF", "AA 4.78", "#175CD3"],
  ["blue", "200", "#B2DDFF", "4.17", "#175CD3"],
  ["blue", "300", "#84CAFF", "3.38", "#175CD3"],
  ["blue", "400", "#53B1FD", "2.32", "#FFFFFF"],
  ["blue", "500", "#2E90FA", "3.24", "#FFFFFF"],
  ["blue", "600", "#1570EF", "AA 4.57", "#FFFFFF"],
  ["blue", "700", "#175CD3", "AA 5.97", "#FFFFFF"],
  ["blue", "800", "#1849A9", "AAA 8.19", "#FFFFFF"],
  ["blue", "900", "#194185", "AAA 9.86", "#FFFFFF"],
  ["blue", "950", "#102A56", "AAA 14.15", "#FFFFFF"],
];

export const blueDark: Color[] = [
  ["blue-dark", "25", "#F5F8FF", "AA 6.01", "#004EEB"],
  ["blue-dark", "50", "#EFF4FF", "AA 5.80", "#004EEB"],
  ["blue-dark", "100", "#D1E0FF", "AA 4.82", "#004EEB"],
  ["blue-dark", "200", "#B2CCFF", "3.93", "#004EEB"],
  ["blue-dark", "300", "#84ADFF", "2.85", "#004EEB"],
  ["blue-dark", "400", "#528BFF", "3.22", "#FFFFFF"],
  ["blue-dark", "500", "#2970FF", "4.31", "#FFFFFF"],
  ["blue-dark", "600", "#155EEF", "AA 5.43", "#FFFFFF"],
  ["blue-dark", "700", "#004EEB", "AA 6.38", "#FFFFFF"],
  ["blue-dark", "800", "#0040C1", "AAA 8.36", "#FFFFFF"],
  ["blue-dark", "900", "#00359E", "AAA 10.51", "#FFFFFF"],
  ["blue-dark", "950", "#002266", "AAA 14.78", "#FFFFFF"],
];

export const indigo: Color[] = [
  ["indigo", "25", "#F5F8FF", "AAA 7.60", "#3538CD"],
  ["indigo", "50", "#EEF4FF", "AAA 7.31", "#3538CD"],
  ["indigo", "100", "#E0EAFF", "AA 6.71", "#3538CD"],
  ["indigo", "200", "#C7D7FE", "AA 5.63", "#3538CD"],
  ["indigo", "300", "#A4BCFD", "4.30", "#3538CD"],
  ["indigo", "400", "#8098F9", "2.70", "#FFFFFF"],
  ["indigo", "500", "#6172F3", "4.03", "#FFFFFF"],
  ["indigo", "600", "#444CE7", "AA 6.10", "#FFFFFF"],
  ["indigo", "700", "#3538CD", "AAA 8.09", "#FFFFFF"],
  ["indigo", "800", "#2D31A6", "AAA 9.97", "#FFFFFF"],
  ["indigo", "900", "#2D3282", "AAA 11.07", "#FFFFFF"],
  ["indigo", "950", "#1F235B", "AAA 14.45", "#FFFFFF"],
];

export const violet: Color[] = [
  ["violet", "25", "#FBFAFF", "AA 6.97", "#6927DA"],
  ["violet", "50", "#F5F3FF", "AA 6.61", "#6927DA"],
  ["violet", "100", "#ECE9FE", "AA 6.10", "#6927DA"],
  ["violet", "200", "#DDD6FE", "AA 5.21", "#6927DA"],
  ["violet", "300", "#C3B5FD", "3.90", "#6927DA"],
  ["violet", "400", "#A48AFB", "2.75", "#FFFFFF"],
  ["violet", "500", "#875BF7", "4.32", "#FFFFFF"],
  ["violet", "600", "#7839EE", "AA 5.79", "#FFFFFF"],
  ["violet", "700", "#6927DA", "AAA 7.25", "#FFFFFF"],
  ["violet", "800", "#5720B7", "AAA 9.13", "#FFFFFF"],
  ["violet", "900", "#491C96", "AAA 11.11", "#FFFFFF"],
  ["violet", "950", "#2E125E", "AAA 15.39", "#FFFFFF"],
];

export const purple: Color[] = [
  ["purple", "25", "#FAFAFF", "AAA 7.41", "#5925DC"],
  ["purple", "50", "#F4F3FF", "AAA 7.01", "#5925DC"],
  ["purple", "100", "#EBE9FE", "AA 6.46", "#5925DC"],
  ["purple", "200", "#D9D6FE", "AA 5.49", "#5925DC"],
  ["purple", "300", "#BDB4FE", "4.08", "#5925DC"],
  ["purple", "400", "#9B8AFB", "2.84", "#FFFFFF"],
  ["purple", "500", "#7A5AF8", "AA 4.53", "#FFFFFF"],
  ["purple", "600", "#6938EF", "AA 6.15", "#FFFFFF"],
  ["purple", "700", "#5925DC", "AAA 7.71", "#FFFFFF"],
  ["purple", "800", "#4A1FB8", "AAA 9.62", "#FFFFFF"],
  ["purple", "900", "#3E1C96", "AAA 11.59", "#FFFFFF"],
  ["purple", "950", "#27115F", "AAA 15.73", "#FFFFFF"],
];

export const fuchsia: Color[] = [
  ["fuchsia", "25", "#FEFAFF", "AA 6.24", "#9F1AB1"],
  ["fuchsia", "50", "#FDF4FF", "AA 6.01", "#9F1AB1"],
  ["fuchsia", "100", "#FBE8FF", "AA 5.55", "#9F1AB1"],
  ["fuchsia", "200", "#F6D0FE", "AA 4.73", "#9F1AB1"],
  ["fuchsia", "300", "#EEAAFD", "3.62", "#9F1AB1"],
  ["fuchsia", "400", "#E478FA", "2.51", "#FFFFFF"],
  ["fuchsia", "500", "#D444F1", "3.56", "#FFFFFF"],
  ["fuchsia", "600", "#BA24D5", "AA 4.87", "#FFFFFF"],
  ["fuchsia", "700", "#9F1AB1", "AA 6.44", "#FFFFFF"],
  ["fuchsia", "800", "#821890", "AAA 8.44", "#FFFFFF"],
  ["fuchsia", "900", "#6F1877", "AAA 10.14", "#FFFFFF"],
  ["fuchsia", "950", "#47104C", "AAA 14.53", "#FFFFFF"],
];

export const pink: Color[] = [
  ["pink", "25", "#FEF6FB", "AA 5.47", "#C11574"],
  ["pink", "50", "#FDF2FA", "AA 5.32", "#C11574"],
  ["pink", "100", "#FCE7F6", "AA 4.94", "#C11574"],
  ["pink", "200", "#FCCEEE", "4.21", "#C11574"],
  ["pink", "300", "#FAA7E0", "3.21", "#C11574"],
  ["pink", "400", "#F670C7", "2.60", "#C11574"],
  ["pink", "500", "#EE46BC", "3.37", "#FFFFFF"],
  ["pink", "600", "#DD2590", "4.43", "#FFFFFF"],
  ["pink", "700", "#C11574", "AA 5.81", "#FFFFFF"],
  ["pink", "800", "#9E165F", "AAA 7.67", "#FFFFFF"],
  ["pink", "900", "#851651", "AAA 9.43", "#FFFFFF"],
  ["pink", "950", "#4E0D30", "AAA 14.68", "#FFFFFF"],
];

export const rose: Color[] = [
  ["rose", "25", "#FFF5F6", "AA 5.78", "#C01048"],
  ["rose", "50", "#FFF1F3", "AA 5.27", "#C01048"],
  ["rose", "100", "#FFE4E8", "AA 4.82", "#C01048"],
  ["rose", "200", "#FECDD6", "4.11", "#C01048"],
  ["rose", "300", "#FEA3B4", "3.06", "#C01048"],
  ["rose", "400", "#FD6F8E", "2.67", "#FFFFFF"],
  ["rose", "500", "#F63D68", "3.62", "#FFFFFF"],
  ["rose", "600", "#E31B54", "AA 4.61", "#FFFFFF"],
  ["rose", "700", "#C01048", "AA 6.15", "#FFFFFF"],
  ["rose", "800", "#A11043", "AAA 7.86", "#FFFFFF"],
  ["rose", "900", "#89123E", "AAA 9.46", "#FFFFFF"],
  ["rose", "950", "#510B24", "AAA 14.75", "#FFFFFF"],
];

export const orangeDark: Color[] = [
  ["orange-dark", "25", "#FFF9F5", "AA 6.1", "#BC1B06"],
  ["orange-dark", "50", "#FFF4ED", "AA 5.88", "#BC1B06"],
  ["orange-dark", "100", "#FFE6D5", "AA 5.31", "#BC1B06"],
  ["orange-dark", "200", "#FFD6AE", "AA 4.69", "#BC1B06"],
  ["orange-dark", "300", "#FF9C66", "3.09", "#BC1B06"],
  ["orange-dark", "400", "#FF692E", "2.87", "#FFFFFF"],
  ["orange-dark", "500", "#FF4405", "3.45", "#FFFFFF"],
  ["orange-dark", "600", "#E62E05", "4.42", "#FFFFFF"],
  ["orange-dark", "700", "#BC1B06", "AA 6.37", "#FFFFFF"],
  ["orange-dark", "800", "#97180C", "AAA 8.57", "#FFFFFF"],
  ["orange-dark", "900", "#771A0D", "AAA 10.83", "#FFFFFF"],
  ["orange-dark", "950", "#57130A", "AAA 13.97", "#FFFFFF"],
];

export const orange: Color[] = [
  ["orange", "25", "#FEFAF5", "AA 5.53", "#B93815"],
  ["orange", "50", "#FEF6EE", "AA 5.36", "#B93815"],
  ["orange", "100", "#FDEAD7", "AA 4.90", "#B93815"],
  ["orange", "200", "#F9DBAF", "4.33", "#B93815"],
  ["orange", "300", "#F7B27A", "3.18", "#B93815"],
  ["orange", "400", "#F38744", "2.51", "#FFFFFF"],
  ["orange", "500", "#EF6820", "3.13", "#FFFFFF"],
  ["orange", "600", "#E04F16", "3.96", "#FFFFFF"],
  ["orange", "700", "#B93815", "AA 5.75", "#FFFFFF"],
  ["orange", "800", "#932F19", "AAA 7.87", "#FFFFFF"],
  ["orange", "900", "#772917", "AAA 9.97", "#FFFFFF"],
  ["orange", "950", "#511C10", "AAA 13.80", "#FFFFFF"],
];

export const yellow: Color[] = [
  ["yellow", "25", "#FEFDF0", "AA 5.08", "#A15C07"],
  ["yellow", "50", "#FEFBE8", "AA 5.01", "#A15C07"],
  ["yellow", "100", "#FEF7C3", "AA 4.78", "#A15C07"],
  ["yellow", "200", "#FEEE95", "4.44", "#A15C07"],
  ["yellow", "300", "#FDE272", "4.02", "#A15C07"],
  ["yellow", "400", "#FAC515", "1.61", "#FFFFFF"],
  ["yellow", "500", "#EAAA08", "2.05", "#FFFFFF"],
  ["yellow", "600", "#CA8504", "3.06", "#FFFFFF"],
  ["yellow", "700", "#A15C07", "AA 5.20", "#FFFFFF"],
  ["yellow", "800", "#854A0E", "AAA 7.07", "#FFFFFF"],
  ["yellow", "900", "#713B12", "AAA 8.97", "#FFFFFF"],
  ["yellow", "950", "#542C0D", "AAA 12.10", "#FFFFFF"],
];

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

const defaultColors = [...primaryColors, ...secondaryColors];

export default defaultColors;

const primaryDefault = "500";
export const twColors = defaultColors.flat(1).reduce((acc, val) => {
  const prefix = val[0];
  const suffix = val[1] != undefined ? "-" + val[1] : "";
  const key = prefix + suffix;
  Object.assign(acc, { [key]: val[2] });

  if (primaryDefault == val[1]) {
    Object.assign(acc, { [prefix]: val[2] });
  }

  return acc;
}, {});
