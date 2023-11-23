import type { Meta, StoryObj } from "@storybook/react";

import ColorsStory from "./Colors";

const meta = {
  title: "Foundations",
  component: ColorsStory,
  parameters: {
    layout: "fullscreen",
  },
} satisfies Meta<typeof ColorsStory>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Colors: Story = {};
