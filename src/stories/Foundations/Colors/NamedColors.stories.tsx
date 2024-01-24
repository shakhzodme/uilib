import React from "react";
import type { Meta, StoryObj } from "@storybook/react";
import CellSwatchDark from "../DesignAnnotations/CellSwatchDark/CellSwatchDark";
import CellSwatchLight from "../DesignAnnotations/CellSwatchLight/CellSwatchLight";
import cn from "@/utils/cn";
import headings from "./headings";
import breakAfter from "./break-after";
import description from "./description";
import { COLORS_REVERSED, NAMED_COLORS } from "@/colors";

type NamedColor = {
  light: {
    value: string;
    label: string;
  };
  dark: {
    value: string;
    label: string;
  };
};

const meta = {
  title: "Foundations/Colors/Named Colors",
  parameters: {
    layout: "fullscreen",
  },
} satisfies Meta;

export default meta;
type Story = StoryObj<typeof meta>;

const Divider: React.FC = () => (
  <tr className="border-y border-secondary">
    <td className="bg-secondary h-3" colSpan={4} />
  </tr>
);

const Heading: React.FC<{
  props: { heading: string; description: string };
}> = ({ props: { heading, description } }) => (
  <>
    <tr>
      <td colSpan={4}>
        <h1 className="text-primary text-display-xs font-semibold mb-3 mt-16">
          {heading}
        </h1>
        <p className="text-tertiary text-lg mb-16">{description}</p>
      </td>
    </tr>
    <tr className="text-tertiary text-xs">
      <td className="py-4 pr-5">Name</td>
      <td className="py-4 px-5">Light mode</td>
      <td className="py-4 px-5">Dark mode</td>
      <td className="py-4 px-5">Usage</td>
    </tr>
    <Divider />
  </>
);

const ColorRow: React.FC<{
  name: string;
  color: NamedColor;
}> = ({ name, color }) => {
  const main = name.split("_")[0];
  const modifier = name.split("_").slice(1).join("_");

  return (
    <tr className="border-y border-secondary">
      <td>
        <div
          className={cn(
            "text-primary bg-primary",
            "border border-secondary",
            "inline-block rounded-md",
            "text-md font-semibold",
            "p-5 py-1 px-3",
            { "bg-primary_hover ml-8": !!modifier },
          )}
        >
          <span>{main}</span>
          {modifier && <span className="text-quarterary">_{modifier}</span>}
        </div>
      </td>
      <td className="p-5">
        <CellSwatchLight code={color.light.value} label={color.light.label} />
      </td>
      <td className="p-5">
        <CellSwatchDark code={color.dark.value} label={color.dark.label} />
      </td>
      <td className="p-5 text-tertiary text-md">{description[name]}</td>
    </tr>
  );
};

const NamedColors: React.FC<{ start: string; end: string }> = ({
  start,
  end,
}) => {
  const allKeys = NAMED_COLORS;
  const startIndex = allKeys.findIndex((key) => key == start);
  const endIndex = allKeys.findIndex((key) => key == end);
  const keys = allKeys.slice(
    startIndex != -1 ? startIndex : 0,
    endIndex != -1 ? endIndex + 1 : allKeys.length - 1,
  );

  const [colors, setColors] = React.useState<Record<string, NamedColor>>({});

  React.useEffect(() => {
    const colors: Record<string, NamedColor> = {};
    const element = document.createElement("div");
    document.body.append(element);
    for (const key of keys) {
      const color = getComputedStyle(element).getPropertyValue("--" + key);
      colors[key] = {
        light: { value: color, label: COLORS_REVERSED[color] ?? color },
        dark: { value: color, label: COLORS_REVERSED[color] ?? color },
      };
    }
    element.classList.add("dark");
    for (const key of keys) {
      const color = getComputedStyle(element).getPropertyValue("--" + key);
      colors[key].dark = {
        value: color,
        label: COLORS_REVERSED[color] ?? color,
      };
    }
    element.remove();
    setColors(colors);
  }, []);

  return (
    <div className="flex flex-col gap-2 p-8">
      <table>
        {keys.map((key) => {
          const color = colors[key] ?? { light: "", dark: "" };
          return (
            <>
              {key in headings && <Heading props={headings[key]} />}
              <ColorRow name={key} color={color} />
              {breakAfter.includes(key) && <Divider />}
            </>
          );
        })}
      </table>
    </div>
  );
};

export const TextColors: Story = {
  render: () => <NamedColors start="text-primary" end="text-success-primary" />,
};

export const BorderColors: Story = {
  render: () => <NamedColors start="border-primary" end="border-error-solid" />,
};

export const ForegroundColors: Story = {
  render: () => <NamedColors start="fg-primary" end="fg-success-secondary" />,
};

export const BackgroundColors: Story = {
  render: () => <NamedColors start="bg-primary" end="bg-success-solid" />,
};

export const ButtonColors: Story = {
  render: () => (
    <NamedColors
      start="button-primary-fg"
      end="button-tertiary-error-bg_hover"
    />
  ),
};

export const IconsColors: Story = {
  render: () => (
    <NamedColors start="icon-fg-brand" end="featured-icon-modern-border" />
  ),
};
