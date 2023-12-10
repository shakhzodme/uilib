import type { Meta, StoryObj } from "@storybook/react";

import Component from "./Simple";
import IconControl from "@/utils/storybook/icon-control";

const meta = {
  title: "Website Components/Testimonial Sections/Simple",
  component: Component,
  argTypes: {
    icon: IconControl(),
  },
} satisfies Meta<typeof Component>;

export default meta;
type Story = StoryObj<typeof meta>;

export const CenteredSecond: Story = {};
