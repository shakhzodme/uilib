import { Button } from "@/stories/Components";
import React from "react";
import Badge from "@/stories/Components/Badge/Badge.tsx";

const links = [
  {
    title: "Product",
    buttons: {
      first: "Overview",
      second: "Features",
      third: "Solutions",
      fourth: "Tutorials",
      fifth: "Pricing",
      sixth: "Releases",
    },
    hasBadge: true,
  },
  {
    title: "Company",
    buttons: {
      first: "About us",
      second: "Careers",
      third: "Press",
      fourth: "News",
      fifth: "Media kit",
      sixth: "Contact",
    },
    hasBadge: false,
  },
  {
    title: "Resources",
    buttons: {
      first: "Blog",
      second: "Newsletter",
      third: "Events",
      fourth: "Help centre",
      fifth: "Tutorials",
      sixth: "Support",
    },
    hasBadge: false,
  },
  {
    title: "Use cases",
    buttons: {
      first: "Startups",
      second: "Enterprise",
      third: "Government",
      fourth: "SaaS centre",
      fifth: "Marketplaces",
      sixth: "Ecommerce",
    },
    hasBadge: false,
  },
  {
    title: "Social",
    buttons: {
      first: "Twitter",
      second: "LinkedIn",
      third: "Facebook",
      fourth: "GitHub",
      fifth: "AngelList",
      sixth: "Dribble",
    },
    hasBadge: false,
  },
  {
    title: "Legal",
    buttons: {
      first: "Terms",
      second: "Privacy",
      third: "Cookies",
      fourth: "Licenses",
      fifth: "Settings",
      sixth: "Contact",
    },
    hasBadge: false,
  },
];

const First: React.FC = () => {
  return (
    <div className="flex flex-col gap-16 px-20 py-10">
      <div className="flex gap-52">
        {links.map((value, index) => (
          <div key={index} className="flex flex-col gap-2">
            <p className="text-[#667085] text-xs font-semibold">
              {value.title}
            </p>
            <nav className="flex flex-col gap-1 items-start">
              <Button
                className="px-0"
                component="a"
                href="#"
                variant="link-gray"
              >
                {value.buttons.first}
              </Button>
              <Button
                className="px-0"
                component="a"
                href="#"
                variant="link-gray"
              >
                {value.buttons.second}
              </Button>
              {value.hasBadge ? (
                <div className="flex gap-2 items-center">
                  <Button
                    className="px-0"
                    component="a"
                    href="#"
                    variant="link-gray"
                  >
                    {value.buttons.third}
                  </Button>
                  <Badge variant="pill" size="sm" color="success">
                    New
                  </Badge>
                </div>
              ) : (
                <Button
                  className="px-0"
                  component="a"
                  href="#"
                  variant="link-gray"
                >
                  {value.buttons.third}
                </Button>
              )}
              <Button
                className="px-0"
                component="a"
                href="#"
                variant="link-gray"
              >
                {value.buttons.fourth}
              </Button>
              <Button
                className="px-0"
                component="a"
                href="#"
                variant="link-gray"
              >
                {value.buttons.fifth}
              </Button>
              <Button
                className="px-0"
                component="a"
                href="#"
                variant="link-gray"
              >
                {value.buttons.sixth}
              </Button>
            </nav>
          </div>
        ))}
      </div>
      <div className="flex flex-col gap-10">
        <span className="h-[1px] w-full bg-[#EAECF0]"></span>
        <div className="flex justify-between items-center">
          <h1 className="text-[#101828] text-xl font-bold">Logo</h1>
          <p className="text-[#667085]">
            © 2077 Untitled UI. All rights reserved.
          </p>
        </div>
      </div>
    </div>
  );
};

export default First;
