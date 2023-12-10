import React from "react";
import { Component as HeroHeaderSection } from "@/stories/WebsiteComponents/HeaderSections/HeroHeaderSections/ScreenMockups/Fifth";
import { Component as SocialProofSection } from "@/stories/WebsiteComponents/SocialProofSections/FullWidth";
import { Component as SectionDivider } from "@/stories/SharedAssets/MiscellaneousAssets/SectionDivider";
import { Component as FeaturesSection } from "@/stories/WebsiteComponents/FeaturesSections/SimpleIcons/Second";

const First: React.FC = () => {
  return (
    <div>
      <HeroHeaderSection />
      <SectionDivider />
      <SocialProofSection />
      <SectionDivider />
      <FeaturesSection />
      <div>Testimonial section</div>
      <div>FAQ section</div>
      <SectionDivider />
      <div>Blog section</div>
      <SectionDivider />
      <div>Footer</div>
    </div>
  );
};

export default First;
