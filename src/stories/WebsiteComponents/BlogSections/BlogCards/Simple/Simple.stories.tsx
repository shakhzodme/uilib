import type { Meta, StoryObj } from "@storybook/react";

import Component from "./Simple";

const meta = {
  title: "Website Components/Blog Sections/Blog Cards",
  component: Component,
} satisfies Meta<typeof Component>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Simple: Story = {
  args: {
    image: (
      <img
        src="https://images.unsplash.com/photo-1663947718652-fa32fb546da2?q=80&w=1740&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
        alt="Hunter Reilly"
      />
    ),
    tag: "Design",
    title: "UX review presentations",
    description:
      "How do you create compelling presentations that wow your colleagues and impress your managers?",
  },
};
