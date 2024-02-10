import type { Meta, StoryObj } from "@storybook/react";

import Component from "./Fourth";

const meta = {
  title: "Website Pages/Landing Pages",
  component: Component,
} satisfies Meta<typeof Component>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Fourth: Story = {};
