import { Spherule } from "@/stories/Foundations/Logos";
import React from "react";
import { Input } from "@/index";

const SidebarNavigation: React.FC = () => {
  return (
    <div className="w-[280px] shrink-0">
      <div>
        <Spherule logotype={true} size="sm" className="mb-6" />
        <Input className="" placeholder="Search" />
      </div>
    </div>
  );
};

export default SidebarNavigation;
