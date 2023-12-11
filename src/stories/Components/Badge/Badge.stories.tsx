import type { Meta, StoryObj } from "@storybook/react";

import Component from "./Badge";

const meta = {
  title: "Components/Badge",
  component: Component,
} satisfies Meta<typeof Component>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Playground: Story = {
  args: {
    children: "Badge",
  },
};
