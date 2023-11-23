import React from "react";
import * as COLORS from "../colors";

const Swatch: React.FC<{
  color: [string, string, string, string];
}> = ({ color }) => {
  return (
    <div className="flex flex-col xl:w-40 rounded overflow-hidden border border-black/10">
      <div style={{ backgroundColor: color[2] }} className="h-20">
        <span className="text-xs bg-white">{color[3]}</span>
      </div>
      <div className="flex flex-col p-1">
        <span className="text-sm">{color[1]}</span>
        <span className="text-xs">{color[2]}</span>
      </div>
    </div>
  );
};

const Colors: React.FC = () => {
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

  const renderColors = (colors: [string, string, string, string][]) => {
    return (
      <div className="grid grid-cols-12 gap-2">
        {colors.map((color, colorIndex) => (
          <Swatch key={colorIndex} color={color} />
        ))}
      </div>
    );
  };

  return (
    <div className="flex flex-col gap-2">
      <div className="text-3xl">Primary colors</div>
      {["base", "gray", "brand", "error", "warning", "success"].map(
        (palette) => (
          <>
            <div className="text-xl">{kebabizeName(palette)}</div>
            {/* @ts-ignore */}
            {renderColors(COLORS[palette])}
          </>
        ),
      )}
      <div className="text-3xl">Secondary colors</div>
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
          <div className="text-xl">{kebabizeName(palette)}</div>
          {/* @ts-ignore */}
          {renderColors(COLORS[palette])}
        </>
      ))}
    </div>
  );
};

export default Colors;
