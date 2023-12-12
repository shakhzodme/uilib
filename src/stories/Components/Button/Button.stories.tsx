import type { Meta, StoryObj } from "@storybook/react";
import ButtonComponent, { storyButtonVariants } from "./Button";
import { General } from "untitledui-js";

const meta = {
  title: "Components/Button",
  component: ButtonComponent,
} satisfies Meta<typeof ButtonComponent>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Playground: Story = {
  args: {
    variant: "primary",
    size: "md",
    children: "A button",
    disabled: false,
  },
};

const RenderVariant: React.FC<{
  variant: (typeof storyButtonVariants.variant)[number];
}> = ({ variant }) => {
  const states = [
    {},
    { disabled: true },

    { leftIcon: <General.Placeholder /> },
    { leftIcon: <General.Placeholder />, disabled: true },

    { rightIcon: <General.Placeholder /> },
    {
      rightIcon: <General.Placeholder />,
      disabled: true,
    },

    {
      leftIcon: <General.Placeholder />,
      rightIcon: <General.Placeholder />,
    },
    {
      leftIcon: <General.Placeholder />,
      rightIcon: <General.Placeholder />,
      disabled: true,
    },
  ];

  return (
    <div className="flex flex-col gap-2 text-primary">
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
    </div>
  );
};

export const Primary: Story = {
  render: () => <RenderVariant variant="primary" />,
};

export const SecondaryGray: Story = {
  render: () => <RenderVariant variant="secondary-gray" />,
};

export const SecondaryColor: Story = {
  render: () => <RenderVariant variant="secondary-color" />,
};

export const TertiaryGray: Story = {
  render: () => <RenderVariant variant="tertiary-gray" />,
};

export const TertiaryColor: Story = {
  render: () => <RenderVariant variant="tertiary-color" />,
};

export const LinkGray: Story = {
  render: () => <RenderVariant variant="link-gray" />,
};

export const LinkColor: Story = {
  render: () => <RenderVariant variant="link-color" />,
};
