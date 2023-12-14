import type { Meta, StoryObj } from "@storybook/react";

import Component from "./NavigationItem";

const meta = {
  title: "Website Components/Header Navigation/Base Components",
  component: Component,
} satisfies Meta<typeof Component>;

export default meta;
type Story = StoryObj<typeof meta>;

export const NavigationItem: Story = {
  args: {
    label: "Navigation Item",
    href: "#",
  },
};
