import type { Meta, StoryObj } from "@storybook/react";

import Component, { BadgeProps, storyBadgeVariants } from "./Badge";
import { General } from "untitledui-js";

const meta = {
  title: "Components/Badge",
  component: Component,
  argTypes: {
    outline: {
      type: "boolean",
    },
  },
} satisfies Meta<typeof Component>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Playground: Story = {
  args: {
    children: "Badge",
    outline: false,
    color: "gray",
    variant: "pill",
    size: "md",
  },
};

const RenderVariants: React.FC<{
  color: (typeof storyBadgeVariants)["color"][number];
}> = ({ color }) => {
  return (
    <div className="flex flex-col gap-4">
      {storyBadgeVariants.outline.map((outline) =>
        storyBadgeVariants.variant.map((variant) =>
          (
            [
              {},
              { leftIcon: <General.Placeholder /> },
              { rightIcon: <General.Placeholder /> },
              {
                leftIcon: <General.Placeholder />,
                rightIcon: <General.Placeholder />,
              },
            ] as BadgeProps[]
          ).map((props) => (
            <div className="flex gap-4 items-start">
              {storyBadgeVariants.size.map((size) => (
                <Component
                  variant={variant}
                  color={color}
                  size={size}
                  outline={outline}
                  {...props}
                >
                  Badge
                </Component>
              ))}
            </div>
          )),
        ),
      )}
    </div>
  );
};

export const Gray: Story = {
  render: () => <RenderVariants color="gray" />,
};

export const Brand: Story = {
  render: () => <RenderVariants color="brand" />,
};

export const Error: Story = {
  render: () => <RenderVariants color="error" />,
};

export const Warning: Story = {
  render: () => <RenderVariants color="warning" />,
};

export const Success: Story = {
  render: () => <RenderVariants color="success" />,
};

export const GrayBlue: Story = {
  render: () => <RenderVariants color="gray-blue" />,
};

export const BlueLight: Story = {
  render: () => <RenderVariants color="blue-light" />,
};

export const Blue: Story = {
  render: () => <RenderVariants color="blue" />,
};

export const Indigo: Story = {
  render: () => <RenderVariants color="indigo" />,
};

export const Purple: Story = {
  render: () => <RenderVariants color="purple" />,
};

export const Pink: Story = {
  render: () => <RenderVariants color="pink" />,
};

export const Orange: Story = {
  render: () => <RenderVariants color="orange" />,
};
