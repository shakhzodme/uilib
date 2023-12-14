import React from "react";
import { NavigationMenuItem as NavigationMenuItemProps } from "../types";
import { Badge, Button } from "@/stories/Components";
import updateProps from "@/utils/update-props";
import cn from "@/utils/cn";

const NavigationMenuItem: React.FC<NavigationMenuItemProps> = ({
  title,
  description,
  icon,
  iconFeatured = false,
  badge,
  button,
}) => {
  return (
    <div className="p-3 hover:bg-primary_hover transition-all lg:rounded-xl flex items-start">
      {icon && (
        <div
          className={cn("mr-4 text-fg-brand-primary", {
            "bg-brand-secondary p-3 rounded-full": iconFeatured,
          })}
        >
          {updateProps(icon, {
            stroke: "currentColor",
            style: {
              height: "24px",
              width: "24px",
            },
          })}
        </div>
      )}
      <div className="flex flex-col items-start">
        <h3 className="text-md font-semibold mb-1">
          {title}
          {badge && <Badge {...badge} />}
        </h3>
        <p className="text-sm text-tertiary mb-3">{description}</p>
        {button && (
          <Button variant="link-color" size="sm" className="p-0" {...button} />
        )}
      </div>
    </div>
  );
};

export default NavigationMenuItem;
