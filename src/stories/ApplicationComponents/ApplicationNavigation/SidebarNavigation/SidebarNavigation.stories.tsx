import type { Meta, StoryObj } from "@storybook/react";

import Component from "./SidebarNavigation";

const meta = {
  title: "Application Components/Sidebar Navigation",
  component: Component,
} satisfies Meta<typeof Component>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Playground: Story = {};
