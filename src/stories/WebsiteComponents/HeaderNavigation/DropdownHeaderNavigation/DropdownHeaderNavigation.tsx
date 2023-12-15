import { Button } from "@/stories/Components";
import { Layers } from "@/stories/Foundations/Logos";
import React from "react";
import { Education } from "untitledui-js";
import { NavigationWithTrigger } from "../BaseComponents/types";
import NavigationItem from "../BaseComponents/NavigationItem/NavigationItem";
import useDarkMode from "@/hooks/use-dark-mode";

const navigation: NavigationWithTrigger[] = [
  { label: "Home", href: "#" },
  {
    label: "Products",
    href: "#",
    trigger: {
      name: "featured-card",
      items: [
        {
          title: "Blog",
          href: "#",
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
    },
  },
  { label: "Resources", href: "#" },
  { label: "Pricing", href: "#" },
];

const DropdownHeaderNavigation: React.FC = () => {
  const isDark = useDarkMode();

  return (
    <div className="flex items-center">
      <div>
        <Layers logotype={true} white={isDark} size="xs" />
      </div>
      <nav className="flex gap-8">
        {navigation.map((link) => (
          <NavigationItem {...link} />
        ))}
      </nav>
      <div className="flex-1"></div>
      <div>
        <Button variant="tertiary-gray" size="lg">
          Log in
        </Button>
        <Button size="lg">Sign up</Button>
      </div>
    </div>
  );
};

export default DropdownHeaderNavigation;
