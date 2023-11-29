import type { Meta, StoryObj } from "@storybook/react";

import Component from "./DesignSystemHeader";

const meta = {
  title: "Foundations/Design Annotations",
  component: Component,
} satisfies Meta<typeof Component>;

export default meta;
type Story = StoryObj<typeof meta>;

export const DesignSystemHeader: Story = {};
