import type { Meta, StoryObj } from "@storybook/react";

import Component from "./NavigationItem";

const meta = {
  title: "Application Components/Application Navigation/Base Components",
  component: Component,
} satisfies Meta<typeof Component>;

export default meta;
type Story = StoryObj<typeof meta>;

export const NavigationItem: Story = {
  render() {
    return (
      <div className="bg-gray-100 p-6">
        <Component />
      </div>
    );
  },
};
