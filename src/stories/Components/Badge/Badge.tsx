import cn from "@/utils/cn";
import { VariantProps, cva } from "cva";
import React from "react";

export const badgeVariants = cva("inline-flex border", {
  variants: {
    variant: {
      pill: ["rounded-full"],
      badge: [],
    },
    outline: {
      true: [],
      false: [],
    },
    color: {
      gray: ["bg-gray-50 text-gray-700 border-gray-200"],
      brand: ["bg-brand-50 text-brand-700 border-brand-200"],
      error: ["bg-error-50 text-error-700 border-error-200"],
      warning: ["bg-warning-50 text-warning-700 border-warning-200"],
      success: ["bg-success-50 text-success-700 border-success-200"],
      "gray-blue": ["bg-gray-blue-50 text-gray-blue-700 border-gray-blue-200"],
      "blue-light": [
        "bg-blue-light-50 text-blue-light-700 border-blue-light-200",
      ],
      blue: ["bg-blue-50 text-blue-700 border-blue-200"],
      indigo: ["bg-indigo-50 text-indigo-700 border-indigo-200"],
      purple: ["bg-purple-50 text-purple-700 border-purple-200"],
      pink: ["bg-pink-50 text-pink-700 border-pink-200"],
      orange: ["bg-orange-50 text-orange-700 border-orange-200"],
    },
    size: {
      sm: ["py-0.5 px-2 text-xs font-medium"],
      md: ["py-0.5 px-2.5 text-sm font-medium"],
      lg: ["py-1 px-3 text-sm font-medium"],
    },
  },
  defaultVariants: {
    variant: "pill",
    outline: false,
    color: "gray",
    size: "md",
  },
});

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
}

const Badge: React.FC<BadgeProps> = ({
  className,
  variant,
  color,
  outline,
  size,
  children,
}) => {
  return (
    <div
      className={cn(
        badgeVariants({ variant, color, outline, size }),
        className,
      )}
    >
      {children}
    </div>
  );
};

Badge.displayName = "Badge";

export default Badge;
