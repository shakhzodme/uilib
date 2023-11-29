import { NamedColor, namedColors } from "@/colors/named-colors";
import type { Meta, StoryObj } from "@storybook/react";
import CellSwatchDark from "../DesignAnnotations/CellSwatchDark/CellSwatchDark";
import CellSwatchLight from "../DesignAnnotations/CellSwatchLight/CellSwatchLight";
import cn from "@/utils/cn";

const meta = {
  title: "Foundations/Colors",
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
  <tr className="border-y border-gray-200">
    <td className="bg-gray-50 h-3" colSpan={4} />
  </tr>
);

const Heading: React.FC<{ props: HeadingProps }> = ({
  props: { heading, description },
}) => (
  <>
    <tr>
      <td colSpan={4}>
        <h1 className="text-gray-900 text-display-xs font-semibold mb-3 mt-16">
          {heading}
        </h1>
        <p className="text-gray-600 text-lg mb-16">{description}</p>
      </td>
    </tr>
    <tr className="text-gray-600 text-xs">
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
    <tr className="border-y border-gray-200">
      <td>
        <div
          className={cn(
            "p-5 text-gray-900 text-md font-semibold py-1 px-3 rounded-md border border-gray-200 inline-block",
            { "bg-gray-50 ml-8": !!modifier },
          )}
        >
          <span>{main}</span>
          {modifier && <span className="text-gray-500">_{modifier}</span>}
        </div>
      </td>
      <td className="p-5">
        <CellSwatchLight code={color.light.code} label={color.light.name} />
      </td>
      <td className="p-5">
        <CellSwatchDark code={color.dark.code} label={color.dark.name} />
      </td>
      <td className="p-5 text-gray-600 text-md">{color.description}</td>
    </tr>
  );
};

export const NamedColors: Story = {
  render: () => {
    const headings: Record<string, HeadingProps> = {
      "text-primary": {
        heading: "Text color",
        description:
          "Use text color variables to manage all text fill colors in your designs across light and dark modes.",
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
      "bg-quarterary",
      "bg-overlay",
    ];

    return (
      <div className="flex flex-col gap-2 p-8">
        <table>
          {Object.keys(namedColors).map((key) => {
            const color = namedColors[key];
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
  },
};
