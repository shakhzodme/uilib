import type { Meta, StoryObj } from "@storybook/react";

import Component from "./Simple";

const meta = {
  title: "Website Components/Blog Sections/Blog Sections",
  component: Component,
} satisfies Meta<typeof Component>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Simple: Story = {};
