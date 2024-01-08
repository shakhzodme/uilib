import cn from "@/utils/cn";
import { VariantProps, cva } from "cva";
import React from "react";
import Badge, { BadgeProps } from "../Badge/Badge";
import updateProps from "@/utils/update-props";

export const badgeGroupVariants = cva(
  "inline-flex justify-center items-center border py-1 transition-all",
  {
    variants: {
      variant: {
        pill: "rounded-full",
        badge: "",
      },
      color: {
        gray: "",
        brand: "",
        error: "",
        warning: "",
        success: "",
      },
      outline: {
        true: "",
        false: "",
      },
      size: {
        md: "gap-2 text-xs font-medium",
        lg: "gap-3 text-sm font-medium",
      },
      modern: {
        true: "",
        false: "",
      },
    },
    compoundVariants: [
      {
        color: "gray",
        outline: false,
        className: "text-gray-700 bg-gray-50 hover:bg-gray-100 border-gray-200",
      },
      {
        color: "gray",
        outline: true,
        className: "text-gray-700 bg-white hover:bg-gray-50 border-gray-600",
      },
      {
        color: "brand",
        outline: false,
        className:
          "text-brand-700 bg-brand-50 hover:bg-brand-100 border-brand-200",
      },
      {
        color: "brand",
        outline: true,
        className: "text-brand-700 bg-white hover:bg-brand-50 border-brand-600",
      },
      {
        color: "error",
        outline: false,
        className:
          "text-error-700 bg-error-50 hover:bg-error-100 border-error-200",
      },
      {
        color: "error",
        outline: true,
        className: "text-error-700 bg-white hover:bg-error-50 border-error-600",
      },
      {
        color: "warning",
        outline: false,
        className:
          "text-warning-700 bg-warning-50 hover:bg-warning-100 border-warning-200",
      },
      {
        color: "warning",
        outline: true,
        className:
          "text-warning-700 bg-white hover:bg-warning-50 border-warning-600",
      },
      {
        color: "success",
        outline: false,
        className:
          "text-success-700 bg-success-50 hover:bg-success-100 border-success-200",
      },
      {
        color: "success",
        outline: true,
        className:
          "text-success-700 bg-white hover:bg-success-50 border-success-600",
      },
      // ---
      {
        variant: "badge",
        size: "md",
        className: "rounded-lg",
      },
      {
        variant: "badge",
        size: "lg",
        className: "rounded-lg",
      },
    ],
    defaultVariants: {
      variant: "pill",
      color: "gray",
      outline: false,
      modern: false,
      size: "lg",
    },
  },
);

type BadgeGroupVariants = VariantProps<typeof badgeGroupVariants>;
type StoryVariants = {
  [K in NonNullable<keyof BadgeGroupVariants>]: NonNullable<
    BadgeGroupVariants[K]
  >[];
};

export const storyBadgeGroupVariants: StoryVariants = {
  variant: ["badge", "pill"],
  color: ["gray", "brand", "error", "warning", "success"],
  outline: [true, false],
  modern: [true, false],
  size: ["md", "lg"],
};

export interface BadgeGroupProps extends BadgeGroupVariants {
  innerBadge: BadgeProps;
  innerBadgePosition?: "left" | "right";
  children: React.ReactNode;
  className?: string;
  leftIcon?: React.ReactNode;
  rightIcon?: React.ReactNode;
}

const BadgeGroup: React.FC<BadgeGroupProps> = ({
  variant = "pill",
  color = "gray",
  outline = false,
  size = "md",
  modern = false,
  innerBadge: innerBadgeProps,
  innerBadgePosition = "left",
  children,
  className,
  leftIcon,
  rightIcon,
}) => {
  const dot = (
    <div
      className={cn("h-2 w-2 rounded-full border-[3px]", {
        "bg-success-500 border-success-100":
          color == "gray" || color == "success",
        "bg-brand-500 border-brand-100": color == "brand",
        "bg-error-500 border-error-100": color == "error",
        "bg-warning-500 border-warning-100": color == "warning",
      })}
    />
  );

  const innerBadge = (
    <Badge
      {...innerBadgeProps}
      size={size == "md" ? "sm" : size == "lg" ? "md" : "sm"}
      color={color}
      outline={outline}
      variant={variant}
      leftIcon={
        modern && innerBadgePosition == "left" ? (
          <>
            <div className="mr-1">{dot}</div>
            {innerBadgeProps.leftIcon}
          </>
        ) : (
          innerBadgeProps.leftIcon
        )
      }
      className={cn("bg-white", innerBadgeProps.className)}
    />
  );

  return (
    <div
      className={cn(
        badgeGroupVariants({ variant, color, outline, size }),
        { "pl-1 pr-2.5": innerBadgePosition == "left" },
        { "pr-1 pl-2.5": innerBadgePosition == "right" },
        className,
      )}
    >
      {innerBadgePosition == "left" && innerBadge}
      <div className="inline-flex items-center justify-center gap-1">
        {leftIcon &&
          updateProps(leftIcon, { stroke: "currentColor", size: "12px" })}
        {children}
        {rightIcon &&
          updateProps(rightIcon, { stroke: "currentColor", size: "12px" })}
      </div>
      {innerBadgePosition == "right" && innerBadge}
    </div>
  );
};

BadgeGroup.displayName = "BadgeGroup";

export default BadgeGroup;
