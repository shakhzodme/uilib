import { NamedColor, rawNamedColors } from "@/colors/named-colors";
import type { Meta, StoryObj } from "@storybook/react";
import CellSwatchDark from "../DesignAnnotations/CellSwatchDark/CellSwatchDark";
import CellSwatchLight from "../DesignAnnotations/CellSwatchLight/CellSwatchLight";
import cn from "@/utils/cn";

const meta = {
  title: "Foundations/Colors/Named Colors",
  parameters: {
    layout: "fullscreen",
  },
} satisfies Meta;

export default meta;
type Story = StoryObj<typeof meta>;

type HeadingProps = {
  heading: string;
  description: string;
};

const Divider: React.FC = () => (
  <tr className="border-y border-border-secondary">
    <td className="bg-bg-secondary h-3" colSpan={4} />
  </tr>
);

const Heading: React.FC<{ props: HeadingProps }> = ({
  props: { heading, description },
}) => (
  <>
    <tr>
      <td colSpan={4}>
        <h1 className="text-text-primary text-display-xs font-semibold mb-3 mt-16">
          {heading}
        </h1>
        <p className="text-text-tertiary text-lg mb-16">{description}</p>
      </td>
    </tr>
    <tr className="text-text-tertiary text-xs">
      <td className="py-4 pr-5">Name</td>
      <td className="py-4 px-5">Light mode</td>
      <td className="py-4 px-5">Dark mode</td>
      <td className="py-4 px-5">Usage</td>
    </tr>
    <Divider />
  </>
);

const ColorRow: React.FC<{ name: string; color: NamedColor }> = ({
  name,
  color,
}) => {
  const main = name.split("_")[0];
  const modifier = name.split("_").slice(1).join("_");

  return (
    <tr className="border-y border-border-secondary">
      <td>
        <div
          className={cn(
            "text-text-primary bg-bg-primary",
            "border border-border-secondary",
            "inline-block rounded-md",
            "text-md font-semibold",
            "p-5 py-1 px-3",
            { "bg-bg-primary_hover ml-8": !!modifier },
          )}
        >
          <span>{main}</span>
          {modifier && (
            <span className="text-text-quarterary">_{modifier}</span>
          )}
        </div>
      </td>
      <td className="p-5">
        <CellSwatchLight code={color.light.code} label={color.light.name} />
      </td>
      <td className="p-5">
        <CellSwatchDark code={color.dark.code} label={color.dark.name} />
      </td>
      <td className="p-5 text-text-tertiary text-md">{color.description}</td>
    </tr>
  );
};

const NamedColors: React.FC<{ start: string; end: string }> = ({
  start,
  end,
}) => {
  const headings: Record<string, HeadingProps> = {
    "text-primary": {
      heading: "Text color",
      description:
        "Use text color variables to manage all text fill colors in your designs across light and dark modes.",
    },
    "border-primary": {
      heading: "Border color",
      description:
        "Use border color variables to manage all stroke colors in your designs across light and dark modes.",
    },
    "fg-primary": {
      heading: "Foreground color",
      description:
        "Use foreground color variables to manage all non-text foreground elements in your designs across light and dark modes.",
    },
    "bg-primary": {
      heading: "Background color",
      description:
        "Use background color variables to manage all fill colors for elements in your designs across light and dark modes.",
    },
  };

  const breakAfter = [
    "text-quarterary_on-brand",
    "text-placeholder_subtle",
    "text-tertiary_alt",
    "border-tertiary",
    "border-disabled_subtle",
    "border-brand-solid_alt",
    "fg-senary",
    "fg-disabled_subtle",
    "fg-brand-secondary",
    "bg-quarterary",
    "bg-overlay",
    "button-primary-border_hover",
    "button-secondary-border_hover",
    "button-secondary-color-border_hover",
    "button-teritary-bg_hover",
    "button-teritary-color-bg_hover",
    "button-primary-error-border_hover",
    "button-secondary-error-border_hover",
  ];

  const allKeys = Object.keys(rawNamedColors);
  const startIndex = allKeys.findIndex((key) => key == start);
  const endIndex = allKeys.findIndex((key) => key == end);
  const keys = allKeys.slice(
    startIndex != -1 ? startIndex : 0,
    endIndex != -1 ? endIndex + 1 : allKeys.length - 1,
  );

  return (
    <div className="flex flex-col gap-2 p-8">
      <table>
        {keys.map((key) => {
          const color = rawNamedColors[key];
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
