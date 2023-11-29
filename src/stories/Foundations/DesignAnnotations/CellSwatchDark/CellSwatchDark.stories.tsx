import type { Meta, StoryObj } from "@storybook/react";

import Component from "./CellSwatchDark";

const meta = {
  title: "Foundations/Design Annotations/Cell Swatch",
  component: Component,
} satisfies Meta<typeof Component>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Dark: Story = {
  args: {
    code: "#101828",
    label: "gray-900",
  },
};
