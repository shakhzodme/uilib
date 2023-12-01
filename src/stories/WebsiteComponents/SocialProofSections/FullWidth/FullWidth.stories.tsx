import type { Meta, StoryObj } from "@storybook/react";

import Component from "./FullWidth";

const meta = {
  title: "Website Components/Social Proof Sections/Full Width",
  component: Component,
} satisfies Meta<typeof Component>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {};

export const Brand: Story = {
  args: {
    brand: true,
  },
};
