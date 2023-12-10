import type { Meta, StoryObj } from "@storybook/react";

import Component from "./Accordion";

const meta = {
  title: "Website Components/FAQ Sections/Accordion",
  component: Component,
} satisfies Meta<typeof Component>;

export default meta;
type Story = StoryObj<typeof meta>;

export const First: Story = {};
