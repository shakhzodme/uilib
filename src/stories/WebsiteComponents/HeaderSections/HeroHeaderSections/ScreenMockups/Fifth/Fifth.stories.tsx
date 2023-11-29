import type { Meta, StoryObj } from "@storybook/react";

import Component from "./Fifth";

const meta = {
  title:
    "Website Components/Header Sections/Hero Header Sections/Screen Mockups",
  component: Component,
} satisfies Meta<typeof Component>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Fifth: Story = {};
