import React from 'react';
import cn from '@/utils/cn';
import { Button } from '@/stories/Components';
import { Component as SectionDivider } from '@/stories/SharedAssets/MiscellaneousAssets/SectionDivider';
import PricingTableCell from '../../PricingTableCell/PricingTableCell';

const Simple: React.FC<{
  className?: string;
  title: string;
  badge?: React.ReactNode;
  price: string;
  pricePer?: string;
  description: string;
}> = ({ className, title, badge, price, pricePer, description }) => {
  return (
    <div className={cn('w-full bg-primary border border-secondary shadow-lg rounded-xl', className)}>
      <div className="p-6">
        <div className="flex justify-between items-center gap-5">
          <h2 className="text-md text-tertiary font-semibold mb-2">{title}</h2>
          {badge}
        </div>
        <h1 className="font-semibold mb-4">
          <span className="text-primary text-display-lg">{price}</span>
          <span className="text-tertiary text-sm">{pricePer}</span>
        </h1>
        <p className="text-md text-tertiary mb-6">{description}</p>
        <Button className="w-full mb-3">Get started</Button>
        <Button variant="secondary-gray" className="w-full border">
          Chat to sales
        </Button>
      </div>
      <SectionDivider />
      <div className="p-6">
        <h3 className="text-primary font-semibold">FEATURES</h3>
        <p className="text-tertiary text-sm">
          Everything in <b className="font-semibold">Starter</b> plus....
        </p>
        <div className="flex flex-col gap-3 pt-5">
          <PricingTableCell title="Access to basic features" />
          <PricingTableCell title="Basic reporting and analytics" />
          <PricingTableCell title="Up to 10 individual users" />
          <PricingTableCell title="20GB individual data each user" />
          <PricingTableCell title="Basic chat and email support" />
        </div>
      </div>
    </div>
  );
};

export default Simple;
