import React from "react";
import { Button, type ButtonProps } from "@/index";
import cn from "@/utils/cn";

export interface FeaturedCardProps {
  className?: string;
  image: React.ReactNode;
  title: string;
  description: string;
  buttons?: ButtonProps[];
}

const FeaturedCard: React.FC<FeaturedCardProps> = ({
  className,
  image,
  title,
  description,
  buttons = [],
}) => {
  return (
    <div
      className={cn(
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

export default FeaturedCard;
