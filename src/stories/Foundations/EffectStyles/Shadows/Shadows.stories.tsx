import { rawShadows } from "@/colors/shadows";
import type { Meta, StoryObj } from "@storybook/react";
import hexToRgba from "hex-to-rgba";

const meta = {
  title: "Foundations/Effect Styles",
  parameters: {
    layout: "fullscreen",
  },
} satisfies Meta;

export default meta;
type Story = StoryObj<typeof meta>;

export const Shadows: Story = {
  render: () => (
    <div className="flex gap-16 p-6 flex-wrap">
      {Object.keys(rawShadows).map((key) => {
        const values = rawShadows[key];
        const boxShadow = values
          .map(
            ({ x, y, blur, spread, color, opacity }) =>
              `${x}px ${y}px ${blur}px ${spread}px ${hexToRgba(
                color.code,
                opacity / 100,
              )}`,
          )
          .join(", ");

        return (
          <div
            className="h-36 w-36 rounded-xl p-6 border border-primary"
            style={{ boxShadow }}
          >
            shadow-{key}
          </div>
        );
      })}
    </div>
  ),
};
