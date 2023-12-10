import React from "react";
import { Button } from "@/stories/Components";
import updateProps from "@/utils/update-props";
import cn from "@/utils/cn";
import { ButtonProps } from "@/stories/Components/Button/Button";

const FeatureText: React.FC<{
  heading: string;
  description: string;
  buttonText?: string;
  buttonProps?: ButtonProps;
  textCentered?: boolean;
  icon?: React.ReactNode;
  iconPosition?: "topLeft" | "topCenter" | "left";
  iconFeatured?: boolean;
  box?: boolean;
}> = ({
  heading,
  description,
  buttonText,
  buttonProps = {},
  textCentered = false,
  iconPosition = "topLeft",
  icon,
  iconFeatured = false,
  box = false,
}) => {
  return (
    <div
      className={cn({
        "text-center": textCentered,
        "flex gap-4 items-start": iconPosition == "left",
      })}
    >
      {icon && (
        <div
          className={cn("inline-flex text-xl text-icon-fg-brand", {
            "justify-center": iconPosition == "topCenter",
            "pt-1": iconPosition == "left",
            "text-fg-secondary p-3 border rounded-lg border-featured-icon-modern-border shadow-xs":
              iconFeatured,
            "mb-3 xl:mb-4": !(box && iconPosition == "topCenter"),
            "translate-y-1/2": box && iconPosition == "topCenter",
          })}
        >
          {updateProps(icon, { size: "24" })}
        </div>
      )}
      <div
        className={cn({
          "bg-secondary rounded-2xl px-6 py-8": box,
        })}
      >
        <h3 className="text-lg xl:text-xl font-semibold mb-3">{heading}</h3>
        <p className="text-tertiary text-md mb-5">{description}</p>

        <Button
          size="lg"
          variant="link-color"
          {...buttonProps}
          className={cn(buttonProps.className ?? "", {
            "pl-0": !textCentered,
          })}
        >
          {buttonText}
        </Button>
      </div>
    </div>
  );
};

FeatureText.displayName = "FeatureText";

export default FeatureText;
