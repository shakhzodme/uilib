import type { Meta, StoryObj } from "@storybook/react";
import Component from "./Select";

const meta = {
  title: "Components/Select",
  component: Component,
} satisfies Meta<typeof Component>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Playground: Story = {
  args: {
    options: [
      { type: "label", children: "Fruits" },
      { type: "item", children: "Apple", value: "apple" },
      { type: "item", children: "Banana", value: "banana" },
      { type: "item", children: "Blueberry", value: "blueberry" },
      { type: "separator" },
      { type: "item", children: "Grapes", value: "grapes" },
      { type: "item", children: "Pineapple", value: "pineapple" },
    ],
    placeholder: "Select your favourite fruit",
    className: "w-[300px]",
  },
};
