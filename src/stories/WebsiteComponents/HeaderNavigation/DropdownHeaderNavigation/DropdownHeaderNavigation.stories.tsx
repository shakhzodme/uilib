import type { Meta, StoryObj } from "@storybook/react";

import Component from "./DropdownHeaderNavigation";

const meta = {
  title: "Website Components/Header Navigation/Dropdown Header Navigation",
  component: Component,
} satisfies Meta<typeof Component>;

export default meta;
type Story = StoryObj<typeof meta>;

export const DropdownHeaderNavigation: Story = {};
