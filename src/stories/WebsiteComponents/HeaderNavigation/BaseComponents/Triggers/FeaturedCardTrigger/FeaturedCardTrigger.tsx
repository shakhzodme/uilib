import React from "react";
import { FeaturedCardNavigationTrigger } from "../../types";
import NavigationMenuItem from "../../NavigationMenuItem/NavigationMenuItem";
import FeaturedCard from "../../FeaturedCard/FeaturedCard";

const FeaturedCardTrigger: React.FC<{
  trigger: FeaturedCardNavigationTrigger;
}> = ({ trigger }) => {
  return (
    <div className="flex w-full">
      <div className="py-6 px-5 flex-1 min-w-[400px] max-w-[500px]">
        {trigger.items.map((item, index) => (
          <NavigationMenuItem {...item} key={index} />
        ))}
      </div>
      <div className="p-5 bg-secondary min-w-[300px]">
        <FeaturedCard {...trigger.featureCard} />
      </div>
    </div>
  );
};

export default FeaturedCardTrigger;
