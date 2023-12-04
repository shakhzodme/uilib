import type { Meta, StoryObj } from "@storybook/react";

import Component from "./SectionDivider";

const meta = {
  title: "Shared Assets/Miscellaneous Assets",
  component: Component,
} satisfies Meta<typeof Component>;

export default meta;
type Story = StoryObj<typeof meta>;

export const SectionDivider: Story = {
  render: () => (
    <div className="p-5">
      <Component />
    </div>
  ),
};
