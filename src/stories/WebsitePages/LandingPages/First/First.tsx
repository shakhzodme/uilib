import React from "react";
import { Component as HeroHeaderSection } from "@/stories/WebsiteComponents/HeaderSections/HeroHeaderSections/ScreenMockups/Fifth";
import { Component as SocialProofSection } from "@/stories/WebsiteComponents/SocialProofSections/FullWidth";
import { Component as SectionDivider } from "@/stories/SharedAssets/MiscellaneousAssets/SectionDivider";
import { Component as FeaturesSection } from "@/stories/WebsiteComponents/FeaturesSections/SimpleIcons/Second";
import { Component as TestimonialSection } from "@/stories/WebsiteComponents/TestimonialSections/Simple";
import { Component as FaqSection } from "@/stories/WebsiteComponents/FaqSections/Accordion";
import { Component as BlogSection } from "@/stories/WebsiteComponents/BlogSections/BlogSections/Simple";
import { Component as FooterSection } from "@/stories/WebsiteComponents/Footers/Large/First";
import { Badge } from "@/index";

const footerNavigation = [
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
];

const First: React.FC = () => {
  return (
    <div>
      <HeroHeaderSection />
      <SectionDivider />
      <SocialProofSection />
      <SectionDivider />
      <FeaturesSection />
      <div className="bg-secondary">
        <TestimonialSection />
      </div>
      <FaqSection />
      <SectionDivider />
      <BlogSection />
      <SectionDivider />
      <FooterSection navigation={footerNavigation} />
    </div>
  );
};

export default First;
