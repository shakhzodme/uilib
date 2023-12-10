import React from "react";
import { Component as HeroHeaderSection } from "@/stories/WebsiteComponents/HeaderSections/HeroHeaderSections/ScreenMockups/Fifth";
import { Component as SocialProofSection } from "@/stories/WebsiteComponents/SocialProofSections/FullWidth";
import { Component as SectionDivider } from "@/stories/SharedAssets/MiscellaneousAssets/SectionDivider";
import { Component as FeaturesSection } from "@/stories/WebsiteComponents/FeaturesSections/SimpleIcons/Second";
import { Component as TestimonialSection } from "@/stories/WebsiteComponents/TestimonialSections/Simple";

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
      <div>FAQ section</div>
      <SectionDivider />
      <div>Blog section</div>
      <SectionDivider />
      <div>Footer</div>
    </div>
  );
};

export default First;
