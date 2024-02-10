import { Button } from '@/stories/Components';
import React from 'react';
import { ButtonProps } from '@/stories/Components/Button/Button';
import { Component as SectionDivider } from '@/stories/SharedAssets/MiscellaneousAssets/SectionDivider';

const Fourth: React.FC<{
  navigation: {
    title: string;
    links: ButtonProps<HTMLAnchorElement>[];
  }[];
}> = ({ navigation }) => {
  return (
    <div className="container mx-auto w-full flex flex-col gap-12 pt-16 pb-8">
      <div className="w-full grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        <div className="flex flex-col gap-4 order-1">
          <h1 className="text-xl font-bold">Untitled UI</h1>
          <p className="text-md text-quarterary w-full md:w-2/3">
            Design amazing digital experiences that create more happy in the world.
          </p>
        </div>
        <div className="flex gap-12  order-3 md:order-2 lg:justify-self-center">
          {navigation.map((value, index) => (
            <div key={index} className="flex flex-col gap-4">
              <p className="text-primary text-sm font-semibold">{value.title}</p>
              <nav className="flex flex-col gap-3 items-start">
                {value.links.map((link, index) => (
                  <Button key={index} className="p-0 text-center" component="a" variant="link-color" {...link} />
                ))}
              </nav>
            </div>
          ))}
        </div>
        <div className="flex flex-col gap-4 order-2 md:order-3 lg:justify-self-center">
          <p className="text-primary text-sm font-semibold">Stay up to date</p>
          <Button className="w-full sm:w-max py-2 px-6">Subscribe</Button>
        </div>
      </div>
      <SectionDivider />
      <div className="flex justify-between items-center gap-8 flex-wrap">
        <p className="text-md text-quarterary">© 2077 Untitled UI. All rights reserved.</p>
        <div className="flex gap-4">
          <Button className="p-0 text-quarterary text-sm" component="a" variant="link-gray" href="/">
            Terms
          </Button>
          <Button className="p-0 text-quarterary text-sm" component="a" variant="link-gray" href="/">
            Privacy
          </Button>
          <Button className="p-0 text-quarterary text-sm" component="a" variant="link-gray" href="/">
            Cookies
          </Button>
        </div>
      </div>
    </div>
  );
};

export default Fourth;
