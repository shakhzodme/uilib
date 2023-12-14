import type { Meta, StoryObj } from "@storybook/react";

import Component from "./FeatureCardTrigger";

const meta = {
  title: "Website Components/Header Navigation/Base Components/Triggers",
  component: Component,
} satisfies Meta<typeof Component>;

export default meta;
type Story = StoryObj<typeof meta>;

export const FeatureCardTrigger: Story = {};
