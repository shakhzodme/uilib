import type { Meta, StoryObj } from "@storybook/react";

import Component, {
  type BadgeGroupProps,
  storyBadgeGroupVariants,
} from "./BadgeGroup";
import { General } from "untitledui-js";

const meta = {
  title: "Components/Badge Group",
  component: Component,
  argTypes: {},
} satisfies Meta<typeof Component>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Playground: Story = {
  args: {
    children: "We’ve just released a new feature",
    outline: true,
    color: "gray",
    variant: "pill",
    size: "md",
    innerBadge: {
      children: "Version 4.0",
    },
    innerBadgePosition: "left",
  },
};

const RenderVariants: React.FC<{
  color: (typeof storyBadgeGroupVariants)["color"][number];
}> = ({ color }) => {
  return (
    <div className="flex flex-col gap-4">
      {storyBadgeGroupVariants.outline.map((outline) =>
        storyBadgeGroupVariants.variant.map((variant) =>
          (
            [
              {},
              { leftIcon: <General.Placeholder /> },
              { rightIcon: <General.Placeholder /> },
              {
                leftIcon: <General.Placeholder />,
                rightIcon: <General.Placeholder />,
              },
            ] as BadgeGroupProps[]
          ).map((props) => (
            <div className="flex gap-4 items-start">
              {storyBadgeGroupVariants.size.map((size) => (
                <Component
                  variant={variant}
                  color={color}
                  size={size}
                  outline={outline}
                  innerBadge={{ children: "Version 4.0" }}
                  {...props}
                >
                  We've released a new feature
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
