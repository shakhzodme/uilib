import cn from "@/utils/cn";
import { VariantProps, cva } from "cva";
import React from "react";

export const buttonVariants = cva(
  "transition-all rounded-lg font-semibold outline-none focus:outline-none",
  {
    variants: {
      variant: {
        primary: [
          "bg-button-primary-bg border-2 border-button-primary-border text-button-primary-fg",
          "hover:bg-button-primary-bg_hover hover:border-button-primary-border_hover",
          "shadow-xs focus:shadow-ring-brand-shadow-xs",
          "disabled:bg-disabled disabled:text-fg-disabled disabled:border-disabled_subtle",
        ],
        "secondary-gray": [
          "text-button-secondary-fg border-2 border-button-secondary-border",
          "hover:bg-button-secondary-bg_hover hover:text-button-secondary-fg_hover",
          "shadow-xs focus:shadow-ring-gray-shadow-xs",
          "disabled:bg-primary disabled:text-fg-disabled disabled:border-disabled_subtle",
        ],
        "secondary-color": [
          "text-button-secondary-color-fg border-2 border-button-secondary-color-border",
          "hover:bg-button-secondary-color-bg_hover hover:text-button-secondary-color-fg_hover",
          "shadow-xs focus:shadow-ring-brand-shadow-xs",
          "disabled:bg-primary disabled:text-fg-disabled disabled:border-disabled_subtle",
        ],
        "tertiary-gray": [
          "text-button-tertiary-fg",
          "enabled:hover:bg-button-tertiary-bg_hover enabled:hover:text-button-tertiary-fg_hover",
          "focus:bg-button-tertiary-bg_hover",
          "disabled:text-fg-disabled",
        ],
        "tertiary-color": [
          "text-button-tertiary-color-fg",
          "enabled:hover:bg-button-tertiary-color-bg_hover enabled:hover:text-button-tertiary-color-fg_hover",
          "focus:bg-button-tertiary-color-bg_hover",
          "disabled:text-fg-disabled",
        ],
        "link-gray": [
          "text-button-tertiary-fg",
          "hover:text-button-tertiary-fg_hover",
          "disabled:text-fg-disabled",
        ],
        "link-color": [
          "text-button-tertiary-color-fg",
          "hover:text-button-tertiary-color-fg_hover",
          "disabled:text-fg-disabled",
        ],
      },
      size: {
        sm: "py-2 px-3 text-sm gap-1.5",
        md: "py-2.5 px-3.5 text-sm gap-1.5",
        lg: "py-3 px-4 text-md gap-2",
        xl: "py-3.5 px-4.5 text-md gap-2",
        "2xl": "py-4 px-5.5 text-lg gap-2.5",
      },
    },
    defaultVariants: {
      variant: "primary",
      size: "md",
    },
  },
);

type ButtonVariants = VariantProps<typeof buttonVariants>;
type StoryVariants = {
  [K in NonNullable<keyof ButtonVariants>]: NonNullable<ButtonVariants[K]>[];
};

export const storyButtonVariants: StoryVariants = {
  variant: [
    "primary",
    "secondary-gray",
    "secondary-color",
    "tertiary-gray",
    "tertiary-color",
    "link-gray",
    "link-color",
  ],
  size: ["sm", "md", "lg", "xl", "2xl"],
};

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    ButtonVariants {
  leftIcon?: React.ReactNode;
  rightIcon?: React.ReactNode;
}

const Button: React.FC<ButtonProps> = ({
  children,
  variant = "primary",
  size = "md",
  className,
  leftIcon,
  rightIcon,
  ...restProps
}) => {
  return (
    <button
      className={cn(
        buttonVariants({ variant, size }),
        "inline-flex items-center",
        className,
      )}
      {...restProps}
    >
      {leftIcon}
      <span>{children}</span>
      {rightIcon}
    </button>
  );
};

Button.displayName = "Button";

export default Button;
