import { Button, type ButtonProps } from "@/stories/Components";
import cn from "@/utils/cn";
import { cx } from "cva";
import React from "react";

export interface FeatureCardProps {
  className?: string;
  image: React.ReactNode;
  title: string;
  description: string;
  buttons?: ButtonProps[];
}

const FeatureCard: React.FC<FeatureCardProps> = ({
  className,
  image,
  title,
  description,
  buttons = [],
}) => {
  return (
    <div
      className={cx(
        "max-w-[320px] hover:bg-primary_hover p-3 rounded-lg transition-all",
        className,
      )}
    >
      <div className="aspect-video rounded-md overflow-hidden mb-6">
        {image}
      </div>
      <h3 className="text-md font-semibold mb-1">{title}</h3>
      <p
        className={cn(
          "text-sm text-tertiary",
          buttons.length > 0 ? "mb-3" : "",
        )}
      >
        {description}
      </p>
      <div className="flex gap-3">
        {buttons.map((props, index) => (
          <Button {...props} className="p-0" key={index} />
        ))}
      </div>
    </div>
  );
};

export default FeatureCard;
