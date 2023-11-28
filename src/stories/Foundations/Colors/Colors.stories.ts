import type { Meta, StoryObj } from "@storybook/react";

import ColorsComponent from "./Colors";

const meta = {
  title: "Foundations",
  component: ColorsComponent,
  parameters: {
    layout: "fullscreen",
  },
} satisfies Meta<typeof ColorsComponent>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Colors: Story = {};
