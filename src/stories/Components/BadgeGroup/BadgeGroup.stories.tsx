import type { Meta, StoryObj } from "@storybook/react";

import Component from "./BadgeGroup";

const meta = {
  title: "Components/Badge Group",
  component: Component,
  argTypes: {},
} satisfies Meta<typeof Component>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Playground: Story = {
  args: {
    children: "We’ve just released a new feature",
    outline: true,
    color: "gray",
    variant: "pill",
    size: "md",
    innerBadge: {
      children: "Version 4.0",
    },
    innerBadgePosition: "left",
  },
};
