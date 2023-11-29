import type { Meta, StoryObj } from "@storybook/react";
import ButtonComponent, { storyButtonVariants } from "./Button";
import { RiCheckboxBlankCircleLine } from "react-icons/ri";

const meta = {
  title: "Components/Button",
  component: ButtonComponent,
} satisfies Meta<typeof ButtonComponent>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Constructor: Story = {
  args: {
    variant: "primary",
    size: "md",
    children: "A button",
    disabled: false,
  },
};

export const All: Story = {
  render: () => {
    const states = [
      {},
      { disabled: true },
      { leftIcon: <RiCheckboxBlankCircleLine /> },
      { rightIcon: <RiCheckboxBlankCircleLine /> },
      {
        leftIcon: <RiCheckboxBlankCircleLine />,
        rightIcon: <RiCheckboxBlankCircleLine />,
      },
    ];

    return (
      <div className="flex flex-col gap-2">
        {storyButtonVariants.variant.map((variant) => (
          <>
            <div key={variant + "header"}>
              Variant: <code>{variant}</code>
            </div>
            {states.map((state, index) => (
              <div key={variant + index} className="flex gap-2 items-center">
                {storyButtonVariants.size.map((size) => (
                  <ButtonComponent
                    key={size}
                    variant={variant}
                    size={size}
                    {...state}
                  >
                    Button
                  </ButtonComponent>
                ))}
              </div>
            ))}

            <div key={variant + "footer"} className="mb-6"></div>
          </>
        ))}
      </div>
    );
  },
};
