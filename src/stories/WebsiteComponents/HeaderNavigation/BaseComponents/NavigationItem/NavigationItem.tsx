import React from "react";
import { NavigationWithTrigger } from "../types";
import FeatureCard from "../FeatureCard/FeatureCard";
import NavigationMenuItem from "../NavigationMenuItem/NavigationMenuItem";

const NavigationItem: React.FC<NavigationWithTrigger> = ({
  label,
  href,
  trigger,
}) => {
  return (
    <div>
      <a href={href} className="text-md font-semibold text-button-tertiary-fg">
        {label}
      </a>
      {trigger && (
        <div className="flex rounded-xl border border-secondary shadow-lg">
          {trigger.name == "featured-card" && (
            <div className="flex w-full">
              <div className="py-6 px-5 flex-1">
                {trigger.items.map((item, index) => (
                  <NavigationMenuItem {...item} key={index} />
                ))}
              </div>
              <FeatureCard {...trigger.featureCard} />
            </div>
          )}
        </div>
      )}
    </div>
  );
};

export default NavigationItem;
