import type { Meta, StoryObj } from "@storybook/react";

import Component from "./NavigationMenuItem";
import { Arrow, Shapes } from "untitledui-js";

const meta = {
  title:
    "Website Components/Header Navigation/Base Components/Navigation Menu Item",
  component: Component,
} satisfies Meta<typeof Component>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Base: Story = {
  args: {
    title: "Products",
    description: "Find the best solution for you.",
    icon: <Shapes.Cube01 />,
    iconFeatured: true,
    badge: {
      children: "New",
      variant: "pill",
      color: "success",
      size: "sm",
      className: "ml-2",
    },
    button: {
      children: "Learn more",
      rightIcon: <Arrow.ArrowRight />,
    },
  },
};
