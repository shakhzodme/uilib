import "../src/index.css";

import type { Preview } from "@storybook/react";

import { withThemeByClassName } from "@storybook/addon-themes";

const preview: Preview = {
  parameters: {
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/i,
      },
    },
    options: {
      storySort: {
        order: [
          "Introduction",
          "Foundations",
          "Components",
          "Shared Assets",
          "Website Pages",
          "Website Components",
          "Application Pages",
          "Application Components",
          "*",
        ],
      },
    },
  },

  decorators: [
    // eslint-disable-next-line
    // @ts-expect-error
    withThemeByClassName({
      themes: {
        light: "",
        dark: "dark",
      },
      defaultTheme: "light",
    }),
  ],
};

export default preview;
