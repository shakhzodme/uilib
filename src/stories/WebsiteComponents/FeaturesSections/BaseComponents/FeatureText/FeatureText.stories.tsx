import type { Meta, StoryObj } from "@storybook/react";

import Component from "./FeatureText";
import IconControl from "@/utils/storybook/icon-control";
import { HiOutlineMail } from "react-icons/hi";
import * as HiIcons from "react-icons/hi";

const meta = {
  title: "Website Components/Features Sections/Base Components/Feature Text",
  component: Component,
  argTypes: {
    icon: IconControl({ ...HiIcons }),
  },
} satisfies Meta<typeof Component>;

export default meta;
type Story = StoryObj<typeof meta>;

export const TextLeft: Story = {};

export const TextCentered: Story = {
  args: {
    textCentered: true,
  },
};

export const IconTopLeft: Story = {
  args: {
    icon: <HiOutlineMail />,
  },
};

export const IconTopCentered: Story = {
  args: {
    textCentered: true,
    icon: <HiOutlineMail />,
    iconPosition: "topCenter",
  },
};

export const IconLeft: Story = {
  args: {
    icon: <HiOutlineMail />,
    iconPosition: "left",
  },
};

export const FeaturedIconTopLeft: Story = {
  args: {
    icon: <HiOutlineMail />,
    iconFeatured: true,
  },
};

export const FeaturedIconTopCentered: Story = {
  args: {
    textCentered: true,
    icon: <HiOutlineMail />,
    iconPosition: "topCenter",
    iconFeatured: true,
  },
};

export const FeaturedIconLeft: Story = {
  args: {
    icon: <HiOutlineMail />,
    iconPosition: "left",
    iconFeatured: true,
  },
};
