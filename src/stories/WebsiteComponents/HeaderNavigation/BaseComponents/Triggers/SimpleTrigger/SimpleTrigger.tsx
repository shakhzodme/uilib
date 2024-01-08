import React from "react";
import { SimpleNavigationTrigger } from "../../types";
import NavigationMenuItem from "../../NavigationMenuItem/NavigationMenuItem";
import cn from "@/utils/cn";

const SimpleTrigger: React.FC<{ trigger: SimpleNavigationTrigger }> = ({
  trigger,
}) => {
  if (typeof trigger.columns != "number") trigger.columns = 1;

  return (
    <div
      className={cn("flex-1", {
        "min-w-[400px] max-w-[500px]": trigger.columns == 1,
        "min-w-[800px] max-w-[1000px]": trigger.columns == 2,
      })}
    >
      <div
        className={cn("p-3 grid gap-x-3 gap-y-1", {
          "lg:grid-cols-2": trigger.columns == 2,
        })}
      >
        {trigger.items.map((item, index) => (
          <NavigationMenuItem {...item} key={index} />
        ))}
      </div>
      {trigger.footer && (
        <div className="bg-secondary py-6 px-8">{trigger.footer}</div>
      )}
    </div>
  );
};

export default SimpleTrigger;
