import type { Meta, StoryObj } from "@storybook/react";

import * as COLORS from "@/colors";

const meta = {
  title: "Foundations/Colors",
  parameters: {
    layout: "fullscreen",
  },
} satisfies Meta;

export default meta;
type Story = StoryObj<typeof meta>;

const Swatch: React.FC<{
  color: COLORS.Color;
}> = ({ color }) => {
  return (
    <div className="flex flex-col rounded-2xl overflow-hidden border border-black/10">
      <div
        style={{ backgroundColor: color[2] }}
        className="h-20 flex items-center justify-center"
      >
        <span className="text-lg font-medium" style={{ color: color[4] }}>
          {color[3]}
        </span>
      </div>
      <div className="flex flex-col py-2 px-3">
        <span className="text-gray-900">{color[1] ?? color[0]}</span>
        <span className="text-xs text-gray-600">{color[2]}</span>
      </div>
    </div>
  );
};

const kebabizeName = (name: string) => {
  let newName = "";

  for (const char of name) {
    if (char == char.toLocaleUpperCase()) {
      newName += "-";
    }
    newName += char.toLocaleLowerCase();
  }

  return newName;
};

const renderColors = (colors: COLORS.Color[]) => {
  return (
    <div className="grid grid-cols-[repeat(12,_minmax(6rem,_12rem))] gap-2 overflow-scroll">
      {colors.map((color, colorIndex) => (
        <Swatch key={colorIndex} color={color} />
      ))}
    </div>
  );
};

export const Palette: Story = {
  render: () => {
    return (
      <div className="flex flex-col gap-2 p-8">
        <div className="text-3xl font-bold">Primary colors</div>
        {["base", "gray", "brand", "error", "warning", "success"].map(
          (palette) => (
            <>
              <div className="font-medium text-xl mt-8 mb-2">
                {kebabizeName(palette)}
              </div>
              {/* @ts-ignore */}
              {renderColors(COLORS[palette])}
            </>
          ),
        )}
        <div className="text-3xl mt-24 font-bold">Secondary colors</div>
        {[
          "grayBlue",
          "grayCool",
          "grayModern",
          "grayNeutral",
          "grayIron",
          "grayTrue",
          "grayWarm",
          "moss",
          "greenLight",
          "green",
          "teal",
          "cyan",
          "blueLight",
          "blue",
          "blueDark",
          "indigo",
          "violet",
          "purple",
          "fuchsia",
          "pink",
          "rose",
          "orangeDark",
          "orange",
          "yellow",
        ].map((palette) => (
          <>
            <div className="font-medium text-xl mt-8 mb-2">
              {kebabizeName(palette)}
            </div>
            {/* @ts-ignore */}
            {renderColors(COLORS[palette])}
          </>
        ))}
      </div>
    );
  },
};
