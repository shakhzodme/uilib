import type { Meta, StoryObj } from "@storybook/react";

import Component from "./First";
import { Badge } from "@/stories/Components";

const meta = {
  title: "Website Components/Footers/Large",
  component: Component,
} satisfies Meta<typeof Component>;

export default meta;
type Story = StoryObj<typeof meta>;

export const First: Story = {
  args: {
    navigation: [
      {
        title: "Product",
        links: [
          { children: "Overview", href: "#" },
          { children: "Features", href: "#" },
          {
            children: "Solutions",
            href: "#",
            rightIcon: (
              <Badge color="success" size="sm">
                New
              </Badge>
            ),
          },
          { children: "Tutorials", href: "#" },
          { children: "Pricing", href: "#" },
          { children: "Releases", href: "#" },
        ],
      },
      {
        title: "Company",
        links: [
          { children: "About us", href: "#" },
          { children: "Careers", href: "#" },
          { children: "Press", href: "#" },
          { children: "News", href: "#" },
          { children: "Media kit", href: "#" },
          { children: "Contact", href: "#" },
        ],
      },
      {
        title: "Resources",
        links: [
          { children: "Blog", href: "#" },
          { children: "Newsletter", href: "#" },
          { children: "Events", href: "#" },
          { children: "Help centre", href: "#" },
          { children: "Tutorials", href: "#" },
          { children: "Support", href: "#" },
        ],
      },
      {
        title: "Use cases",
        links: [
          { children: "Startups", href: "#" },
          { children: "Enterprise", href: "#" },
          { children: "Government", href: "#" },
          { children: "SaaS centre", href: "#" },
          { children: "Marketplaces", href: "#" },
          { children: "Ecommerce", href: "#" },
        ],
      },
      {
        title: "Social",
        links: [
          { children: "Twitter", href: "#" },
          { children: "LinkedIn", href: "#" },
          { children: "Facebook", href: "#" },
          { children: "GitHub", href: "#" },
          { children: "AngelList", href: "#" },
          { children: "Ecommerce", href: "#" },
        ],
      },
      {
        title: "Legal",
        links: [
          { children: "Terms", href: "#" },
          { children: "Privacy", href: "#" },
          { children: "Cookies", href: "#" },
          { children: "Licenses", href: "#" },
          { children: "Settings", href: "#" },
          { children: "Contact", href: "#" },
        ],
      },
    ],
  },
};
