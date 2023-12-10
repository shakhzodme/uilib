import React from "react";
import { MediaDevices } from "untitledui-js";
import { Component as DropdownHeaderNavigation } from "@/stories/WebsiteComponents/HeaderNavigation/DropdownHeaderNavigation";
import { Button } from "@/stories/Components";

const First: React.FC = () => {
  return (
    <div className="min-h-screen">
      <DropdownHeaderNavigation />
      <section className="text-center">
        <h1 className="text-display-xl font-semibold mb-6">
          Beautiful analytics to grow smarter
        </h1>
        <p className="text-xl text-gray-600 mb-12">
          Powerful, self-serve product and growth analytics to help you convert,
          engage, and retain more users. Trusted by over 4,000 startups.
        </p>
        <div className="flex gap-3 justify-center">
          <Button
            variant="secondary-gray"
            size="2xl"
            leftIcon={<MediaDevices.PlayCircle stroke="currentColor" />}
          >
            Demo
          </Button>
          <Button size="2xl">Sign up</Button>
        </div>
      </section>
    </div>
  );
};

export default First;
