import { Button } from '@/stories/Components';
import React from 'react';

const First: React.FC = () => {
  return (
    <div className="container mx-auto py-24">
      <div className="flex justify-between gap-8 flex-col sm:flex-row sm:gap-16">
        <div>
          <h1 className="text-display-md font-semibold mb-5">Don’t just take our word for it</h1>
          <p className="text-xl text-tertiary">Hear from some of our amazing customers who are building faster.</p>
        </div>
        <div className="h-max flex gap-2 flex-wrap">
          <Button variant="secondary-gray" className="w-full sm:w-max">
            Our customers
          </Button>
          <Button className="w-full sm:w-max">Create account</Button>
        </div>
      </div>
    </div>
  );
};

export default First;
