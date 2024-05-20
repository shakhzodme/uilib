import { Component as PricingCard } from '@/stories/WebsiteComponents/PricingSections/PricingCards/Simple';
import { Badge } from '@/stories/Components';

const Third = () => {
  return (
    <div className="container mx-auto py-24">
      <h3 className="text-center text-brand-secondary text-md font-semibold mb-3">Pricing</h3>
      <h1 className="text-center text-display-md font-semibold mb-5">Plans that fit your scale</h1>
      <p className="text-center text-tertiary text-xl">
        Simple, transparent pricing that grows with you. Try any plan free for 30 days.
      </p>
      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8 pt-16">
        <PricingCard
          title="Basic plan"
          badge={
            <Badge color="brand" className="font-semibold">
              Popular
            </Badge>
          }
          price="$10"
          pricePer="per month"
          description="Basic features for up to 10 users."
        />
        <PricingCard
          title="Business plan"
          price="$20"
          pricePer="per month"
          description="Basic features for up to 10 users."
        />
        <PricingCard
          title="Enterprise plan"
          price="$40"
          pricePer="per month"
          description="Basic features for up to 10 users."
        />
      </div>
    </div>
  );
};

export default Third;
