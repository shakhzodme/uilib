import cn from "@/utils/cn";
import updateProps from "@/utils/update-props";
import { VariantProps, cva } from "cva";
import React from "react";

export const badgeVariants = cva(
  "inline-flex items-center justify-center border",
  {
    variants: {
      variant: {
        pill: "rounded-full",
        badge: "",
      },
      outline: {
        true: [],
        false: [],
      },
      color: {
        gray: "text-gray-700",
        brand: "text-brand-700",
        error: "text-error-700",
        warning: "text-warning-700",
        success: "text-success-700",
        "gray-blue": "text-gray-blue-700",
        "blue-light": "text-blue-light-700",
        blue: "text-blue-700",
        indigo: "text-indigo-700",
        purple: "text-purple-700",
        pink: "text-pink-700",
        orange: "text-orange-700",
      },
      size: {
        sm: ["py-0.5 px-2 text-xs font-medium gap-0.5"],
        md: ["py-0.5 px-2.5 text-sm font-medium gap-1"],
        lg: ["py-1 px-3 text-sm font-medium gap-1"],
      },
    },
    compoundVariants: [
      {
        outline: false,
        color: "gray",
        className: "bg-gray-50 border-gray-200",
      },
      { outline: true, color: "gray", className: "border-gray-600" },
      {
        outline: false,
        color: "brand",
        className: "bg-brand-50 border-brand-200",
      },
      { outline: true, color: "brand", className: "border-brand-600" },
      {
        outline: false,
        color: "error",
        className: "bg-error-50 border-error-200",
      },
      { outline: true, color: "error", className: "border-error-600" },
      {
        outline: false,
        color: "warning",
        className: "bg-warning-50 border-warning-200",
      },
      { outline: true, color: "warning", className: "border-warning-600" },
      {
        outline: false,
        color: "success",
        className: "bg-success-50 border-success-200",
      },
      { outline: true, color: "success", className: "border-success-600" },
      {
        outline: false,
        color: "gray-blue",
        className: "bg-gray-blue-50 border-gray-blue-200",
      },
      { outline: true, color: "gray-blue", className: "border-gray-blue-600" },
      {
        outline: false,
        color: "blue-light",
        className: "bg-blue-light-50 border-blue-light-200",
      },
      {
        outline: true,
        color: "blue-light",
        className: "border-blue-light-600",
      },
      {
        outline: false,
        color: "blue",
        className: "bg-blue-50 border-blue-200",
      },
      { outline: true, color: "blue", className: "border-blue-600" },
      {
        outline: false,
        color: "indigo",
        className: "bg-indigo-50 border-indigo-200",
      },
      { outline: true, color: "indigo", className: "border-indigo-600" },
      {
        outline: false,
        color: "purple",
        className: "bg-purple-50 border-purple-200",
      },
      { outline: true, color: "purple", className: "border-purple-600" },
      {
        outline: false,
        color: "pink",
        className: "bg-pink-50 border-pink-200",
      },
      { outline: true, color: "pink", className: "border-pink-600" },
      {
        outline: false,
        color: "orange",
        className: "bg-orange-50 border-orange-200",
      },
      { outline: true, color: "orange", className: "border-orange-600" },
      { variant: "badge", size: "sm", className: "rounded-md" },
      { variant: "badge", size: "md", className: "rounded-md" },
      { variant: "badge", size: "lg", className: "rounded-lg" },
    ],
    defaultVariants: {
      variant: "pill",
      outline: false,
      color: "gray",
      size: "md",
    },
  },
);

type BadgeVariants = VariantProps<typeof badgeVariants>;
type StoryVariants = {
  [K in NonNullable<keyof BadgeVariants>]: NonNullable<BadgeVariants[K]>[];
};

export const storyBadgeVariants: StoryVariants = {
  variant: ["badge", "pill"],
  color: [
    "gray",
    "brand",
    "error",
    "warning",
    "success",
    "gray-blue",
    "blue-light",
    "blue",
    "indigo",
    "purple",
    "pink",
    "orange",
  ],
  outline: [true, false],
  size: ["sm", "md", "lg"],
};

export interface BadgeProps extends BadgeVariants {
  className?: string;
  children: React.ReactNode;
  leftIcon?: React.ReactNode;
  rightIcon?: React.ReactNode;
}

const Badge: React.FC<BadgeProps> = ({
  className,
  variant,
  color,
  outline,
  size,
  children,
  leftIcon,
  rightIcon,
}) => {
  return (
    <div
      className={cn(
        badgeVariants({ variant, color, outline, size }),
        { "pl-1.5": leftIcon && size == "sm" },
        { "pr-1.5": rightIcon && size == "sm" },
        { "pl-2": leftIcon && size == "md" },
        { "pr-2": rightIcon && size == "md" },
        { "pl-2.5": leftIcon && size == "lg" },
        { "pr-2.5": rightIcon && size == "lg" },
        className,
      )}
    >
      {leftIcon &&
        updateProps(leftIcon, { stroke: "currentColor", size: "12px" })}
      {children}
      {rightIcon &&
        updateProps(rightIcon, { stroke: "currentColor", size: "12px" })}
    </div>
  );
};

Badge.displayName = "Badge";

export default Badge;
