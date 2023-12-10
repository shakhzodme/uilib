import type { Meta, StoryObj } from "@storybook/react";

import Component from "./FeatureText";
import IconControl from "@/utils/storybook/icon-control";
import { Arrow, General } from "untitledui-js";

const meta = {
  title: "Website Components/Features Sections/Base Components/Feature Text",
  component: Component,
  argTypes: {
    icon: IconControl(),
  },
} satisfies Meta<typeof Component>;

export default meta;
type Story = StoryObj<typeof meta>;

const defaultText = {
  heading: "Deliver instant answers",
  description:
    "An all-in-one customer service platform that helps you balance everything your customers need to be happy.",
  buttonText: "Learn more",
  buttonProps: {
    rightIcon: <Arrow.ArrowRight stroke="currentColor" />,
  },
};

export const TextLeft: Story = {
  args: {
    ...defaultText,
  },
};

export const TextCentered: Story = {
  args: {
    ...defaultText,
    textCentered: true,
  },
};

export const IconTopLeft: Story = {
  args: {
    ...defaultText,
    icon: <General.Zap stroke="currentColor" />,
  },
};

export const IconTopCentered: Story = {
  args: {
    ...defaultText,
    textCentered: true,
    icon: <General.Zap stroke="currentColor" />,
    iconPosition: "topCenter",
  },
};

export const IconLeft: Story = {
  args: {
    ...defaultText,
    icon: <General.Zap stroke="currentColor" />,
    iconPosition: "left",
  },
};

export const FeaturedIconTopLeft: Story = {
  args: {
    ...defaultText,
    icon: <General.Zap stroke="currentColor" />,
    iconFeatured: true,
  },
};

export const FeaturedIconTopCentered: Story = {
  args: {
    ...defaultText,
    textCentered: true,
    icon: <General.Zap stroke="currentColor" />,
    iconPosition: "topCenter",
    iconFeatured: true,
  },
};

export const FeaturedIconLeft: Story = {
  args: {
    ...defaultText,
    icon: <General.Zap stroke="currentColor" />,
    iconPosition: "left",
    iconFeatured: true,
  },
};
export const FeaturedIconBoxTopLeft: Story = {
  args: {
    ...defaultText,
    icon: <General.Zap stroke="currentColor" />,
    iconFeatured: true,
    box: true,
  },
};

export const FeaturedIconBoxTopCentered: Story = {
  args: {
    ...defaultText,
    textCentered: true,
    icon: <General.Zap stroke="currentColor" />,
    iconPosition: "topCenter",
    iconFeatured: true,
    box: true,
  },
};

export const FeaturedIconBoxLeft: Story = {
  args: {
    ...defaultText,
    icon: <General.Zap stroke="currentColor" />,
    iconPosition: "left",
    iconFeatured: true,
    box: true,
  },
};
