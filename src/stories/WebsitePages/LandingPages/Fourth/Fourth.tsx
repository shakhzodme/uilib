import React from 'react';
import { Component as HeroHeaderSection } from '@/stories/WebsiteComponents/HeaderSections/HeroHeaderSections/ScreenMockups/Eighth';
import { Component as SocialProofSection } from '@/stories/WebsiteComponents/SocialProofSections/FullWidth';
import { Component as SectionDivider } from '@/stories/SharedAssets/MiscellaneousAssets/SectionDivider';
import { Component as FeaturesSection } from '@/stories/WebsiteComponents/FeaturesSections/SimpleIcons/Second';
import { Component as PricingSection } from '@/stories/WebsiteComponents/PricingSections/PricingSections/Third';
import { Component as TestimonialsSection } from '@/stories/WebsiteComponents/TestimonialSections/Glassmorphic/First';
import { Component as CTASection } from '@/stories/WebsiteComponents/CTASections/ScreenMockup/Third';
import { Component as FooterSection } from '@/stories/WebsiteComponents/Footers/Large/Fourth';
import { Badge } from '@/stories/Components';

const footerNavigation = [
  {
    title: 'Product',
    links: [
      { children: 'Overview', href: '#' },
      { children: 'Features', href: '#' },
      {
        children: 'Solutions',
        href: '#',
        rightIcon: (
          <Badge color="brand" size="sm">
            New
          </Badge>
        ),
      },
      { children: 'Tutorials', href: '#' },
      { children: 'Pricing', href: '#' },
      { children: 'Releases', href: '#' },
    ],
  },
  {
    title: 'Resources',
    links: [
      { children: 'Blog', href: '#' },
      { children: 'Newsletter', href: '#' },
      { children: 'Events', href: '#' },
      { children: 'Help centre', href: '#' },
      { children: 'Tutorials', href: '#' },
      { children: 'Support', href: '#' },
    ],
  },
];

const Fourth: React.FC = () => {
  return (
    <div>
      <HeroHeaderSection />
      <SocialProofSection />
      <div className="bg-secondary">
        <FeaturesSection />
      </div>
      <PricingSection />
      <SectionDivider />
      <TestimonialsSection />
      <SectionDivider />
      <CTASection />
      <div className="bg-secondary">
        <FooterSection navigation={footerNavigation} />
      </div>
    </div>
  );
};

export default Fourth;
