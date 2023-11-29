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
          "focus:shadow-button-focus focus:shadow-brand-600/50",
          "disabled:bg-bg-disabled disabled:text-fg-disabled disabled:border-border-disabled_subtle",
        ],
        "secondary-gray": [
          "text-button-secondary-fg border-2 border-button-secondary-border",
          "hover:bg-button-secondary-bg_hover hover:text-button-secondary-fg_hover",
          "focus:shadow-button-focus focus:shadow-gray-100",
          "disabled:bg-bg-primary disabled:text-fg-disabled disabled:border-border-disabled_subtle disabled:bg-white",
        ],
        "secondary-color": [
          "text-brand-700 border-2 border-brand-300",
          "hover:bg-brand-50 hover:text-brand-800",
          "focus:shadow-button-focus focus:shadow-brand-200",
          "disabled:bg-white disabled:text-gray-400 disabled:border-gray-200",
        ],
        "teritary-gray": [
          "text-gray-600",
          "hover:bg-gray-50 hover:text-gray-700",
          "focus:bg-gray-50",
          "disabled:text-gray-400 disabled:hover:bg-white",
        ],
        "teritary-color": [
          "text-brand-700",
          "hover:bg-brand-50 hover:text-brand-800",
          "focus:bg-brand-50",
          "disabled:text-gray-400 disabled:hover:bg-white",
        ],
        "link-gray": [
          "text-gray-600",
          "hover:text-gray-700",
          "disabled:text-gray-400",
        ],
        "link-color": [
          "text-brand-700",
          "hover:text-brand-800",
          "disabled:text-gray-400",
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
    "teritary-gray",
    "teritary-color",
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
