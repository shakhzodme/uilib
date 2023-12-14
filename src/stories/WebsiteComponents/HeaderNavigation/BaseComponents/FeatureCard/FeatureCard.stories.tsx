import type { Meta, StoryObj } from "@storybook/react";

import Component from "./FeatureCard";

const meta = {
  title: "Website Components/Header Navigation/Base Components",
  component: Component,
} satisfies Meta<typeof Component>;

export default meta;
type Story = StoryObj<typeof meta>;

export const FeatureCard: Story = {
  args: {
    image: (
      <img src="https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8YmxvZ3xlbnwwfHwwfHx8MA%3D%3D" />
    ),
    title: "We've just released an update!",
    description:
      "Check out the all new dashboard view. Pages and exports now load faster.",
    buttons: [
      {
        children: "Dismiss",
        variant: "link-gray",
        size: "sm",
      },
      {
        children: "Changelog",
        variant: "link-color",
        size: "sm",
      },
    ],
  },
};
