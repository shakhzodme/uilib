import type { Meta, StoryObj } from "@storybook/react";
import Component from "./Input";

const meta = {
  title: "Components/Input",
  component: Component,
} satisfies Meta<typeof Component>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Playground: Story = {
  args: {},
};
