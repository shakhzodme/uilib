import React from "react";
import type { Meta, StoryObj } from "@storybook/react";
import { Color, PALETTES } from "@/colors";

const meta = {
  title: "Foundations/Colors",
  parameters: {
    layout: "fullscreen",
  },
} satisfies Meta;

export default meta;
type Story = StoryObj<typeof meta>;

const Swatch: React.FC<{
  color: Color;
}> = ({ color }) => {
  return (
    <div className="flex flex-col rounded-2xl overflow-hidden bg-primary border border-primary">
      <div
        style={{ backgroundColor: color.value }}
        className="h-20 flex items-center justify-center"
      >
        <span
          className="text-lg font-medium"
          style={{ color: color.foregroundColor ?? "#ffffff" }}
        >
          {color.score}
        </span>
      </div>
      <div className="flex flex-col py-2 px-3">
        <span className="text-primary">{color.shade}</span>
        <span className="text-xs text-tertiary">{color.name}</span>
        <span className="text-xs text-tertiary">{color.value}</span>
      </div>
    </div>
  );
};

const renderColors = (colors: Record<string, Color>) => {
  return (
    <div className="grid grid-cols-[repeat(12,_minmax(6rem,_12rem))] gap-2 overflow-scroll">
      {Object.keys(colors).map((key, colorIndex) => (
        <Swatch key={colorIndex} color={colors[key]} />
      ))}
    </div>
  );
};

export const Palette: Story = {
  render: () => {
    return (
      <div className="flex flex-col gap-2 p-8">
        <div className="text-3xl font-bold text-primary">Primary colors</div>
        {["black", "white", "gray", "brand", "error", "warning", "success"].map(
          (palette) => (
            <>
              <div className="font-medium text-xl mt-8 mb-2 text-primary">
                {palette}
              </div>
              {renderColors(PALETTES[palette])}
            </>
          ),
        )}
        <div className="text-3xl mt-24 font-bold text-primary">
          Secondary colors
        </div>
        {[
          "gray-blue",
          "gray-cool",
          "gray-modern",
          "gray-neutral",
          "gray-iron",
          "gray-true",
          "gray-warm",
          "moss",
          "green-light",
          "green",
          "teal",
          "cyan",
          "blue-light",
          "blue",
          "blue-dark",
          "indigo",
          "violet",
          "purple",
          "fuchsia",
          "pink",
          "rose",
          "orange-dark",
          "orange",
          "yellow",
        ].map((palette) => (
          <>
            <div className="font-medium text-xl mt-8 mb-2 text-primary">
              {palette}
            </div>
            {/* @ts-ignore */}
            {renderColors(PALETTES[palette])}
          </>
        ))}
      </div>
    );
  },
};
