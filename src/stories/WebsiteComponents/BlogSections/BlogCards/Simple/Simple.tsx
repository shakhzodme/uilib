import React from "react";
import { Arrow } from "untitledui-js";

const Simple: React.FC<{
  className?: string;
  image: React.ReactNode;
  tag: string;
  title: string;
  description: string;
}> = ({ className, image, tag, title, description }) => {
  return (
    <div className={className}>
      <div className="rounded-2xl overflow-hidden mb-5 aspect-video">
        {image}
      </div>
      <p className="text-sm text-brand-secondary font-semibold mb-2">{tag}</p>
      <h2 className="text-xl lg:text-display-xs font-semibold mb-2">
        <span className="mr-4">{title}</span>
        <Arrow.ArrowUpRight stroke="currentColor" className="inline-block" />
      </h2>
      <p className="text-md text-tertiary mb-6">{description}</p>
      <div>Avatar label group</div>
    </div>
  );
};

export default Simple;
