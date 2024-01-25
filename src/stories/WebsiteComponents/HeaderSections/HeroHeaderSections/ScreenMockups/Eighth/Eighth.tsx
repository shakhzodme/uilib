import React from 'react';
import { MediaDevices } from 'untitledui-js';
import { Component as DropdownHeaderNavigation } from '@/stories/WebsiteComponents/HeaderNavigation/DropdownHeaderNavigation';
import { Button, BadgeGroup } from '@/stories/Components';

const Eighth: React.FC = () => {
  return (
    <div className="min-h-screen">
      <DropdownHeaderNavigation />
      <section className="flex flex-col items-center justify-center text-center pt-32 pb-16">
        <BadgeGroup innerBadge={{ children: "What's new?" }} variant="badge" modern={true}>
          Instantly issue virtual cards
        </BadgeGroup>
        <h1 className="text-display-xl font-semibold mb-6">No more banking headaches</h1>
        <p className="text-xl text-gray-600 mb-12 max-w-3xl">
          Mo money, no problems. Untitled is a next-generation financial technology company in the process of
          reinventing banking. 30-day free trial.
        </p>
        <div className="flex gap-3 justify-center">
          <Button variant="secondary-gray" size="2xl" leftIcon={<MediaDevices.PlayCircle stroke="currentColor" />}>
            Demo
          </Button>
          <Button size="2xl">Sign up</Button>
        </div>
      </section>
      <div className="container mx-auto h-96 bg-[url('https://images.unsplash.com/photo-1613243555978-636c48dc653c')] bg-cover"></div>
    </div>
  );
};

export default Eighth;
