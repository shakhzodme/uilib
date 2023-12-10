import type { Meta, StoryObj } from "@storybook/react";

import Component from "./FaqItem";

const meta = {
  title: "Website Components/FAQ Sections/Base Components",
  component: Component,
  argTypes: {
    iconPosition: {
      control: { type: "select" },
      options: ["left", "right"],
    },
  },
} satisfies Meta<typeof Component>;

export default meta;
type Story = StoryObj<typeof meta>;

export const FaqItem: Story = {
  args: {
    title: "This is my question?",
    content: "This is my answer",
    icon: true,
    iconPosition: "right",
    divider: true,
    expanded: false,
  },
};
