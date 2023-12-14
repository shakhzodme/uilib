import React from "react";
import NavigationItem from "../../NavigationItem/NavigationItem";
import { Education } from "untitledui-js";

const FeatureCardTrigger: React.FC = () => {
  return (
    <NavigationItem
      label="Resources"
      href="#"
      trigger={{
        name: "featured-card",
        items: [
          {
            title: "Blog",
            description: "The latest industry news, updates and info.",
            icon: <Education.BookClosed />,
          },
        ],
        featureCard: {
          image: (
            <img src="https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8YmxvZ3xlbnwwfHwwfHx8MA%3D%3D" />
          ),
          title: "We've just released an update!",
          description:
            "Check out the all new dashboard view. Pages now load faster.",
          buttons: [
            {
              variant: "link-gray",
              children: "Dismiss",
            },
            {
              variant: "link-color",
              children: "Changelog",
            },
          ],
        },
      }}
    />
  );
};

export default FeatureCardTrigger;
