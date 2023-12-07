import { rawFocusRings } from "@/colors/focus-rings";
import { Shadow } from "@/colors/shadows";
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

type HeadingProps = {
  heading: string;
  description: string;
};

export const FocusRings: Story = {
  render: () => {
    const headings: Record<string, HeadingProps> = {
      "ring-brand": {
        heading: "Focus rings",
        description:
          "Single layer focus rings are used for elements such as toggles and checkboxes that don’t require a shadow.",
      },
      "ring-brand-shadow-xs": {
        heading: "Focus rings with shadows",
        description:
          "Some elements, such as input fields and buttons, require a shadow and a focus ring. Currently, Figma doesn’t support adding multiple effects styles to elements. As a workaround, these focus rings are combined with shadow styles.",
      },
    };

    return (
      <div className="flex flex-col gap-16 p-6 pb-12">
        {Object.keys(rawFocusRings)
          .reduce(
            (acc, key) => {
              if (key in headings) {
                acc.push(headings[key]);
                acc.push([]);
              }

              const last = acc[acc.length - 1];
              if (Array.isArray(last)) {
                last.push([key, rawFocusRings[key]]);
              }

              return acc;
            },
            [] as (HeadingProps | [string, Shadow[]][])[],
          )
          .map((items) =>
            Array.isArray(items) ? (
              <div className="flex gap-16 flex-wrap">
                {items.map(([key, values]) => {
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
                      className="h-52 w-64 rounded-xl p-6 border border-primary flex flex-col justify-between text-lg font-medium"
                      style={{ boxShadow }}
                    >
                      <span>{key}</span>
                      <div className="flex flex-col text-tertiary">
                        {values[values.length - 1].color.name}
                        <br />
                        {values[values.length - 1].opacity}% opacity
                      </div>
                    </div>
                  );
                })}
              </div>
            ) : (
              <div className="my-6">
                <h1 className="text-display-xs font-semibold">
                  {items.heading}
                </h1>
                <p className="text-lg text-tertiary">{items.description}</p>
              </div>
            ),
          )}
      </div>
    );
  },
};
