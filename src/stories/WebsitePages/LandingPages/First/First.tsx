import React from "react";
import { Component as HeroHeaderSection } from "@/stories/WebsiteComponents/HeaderSections/HeroHeaderSections/ScreenMockups/Fifth";
import { Component as SocialProofSection } from "@/stories/WebsiteComponents/SocialProofSections/FullWidth";

const First: React.FC = () => {
  return (
    <div>
      <HeroHeaderSection />
      <div>Section divider</div>
      <SocialProofSection />
      <div>Features section</div>
      <div>Testimonial section</div>
      <div>FAQ section</div>
      <div>Section divider</div>
      <div>Blog section</div>
      <div>Section divider</div>
      <div>Footer</div>
    </div>
  );
};

export default First;
