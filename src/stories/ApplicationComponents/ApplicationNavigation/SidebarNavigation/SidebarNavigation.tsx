import { Spherule } from "@/stories/Foundations/Logos";
import React from "react";

const SidebarNavigation: React.FC = () => {
  return (
    <div className="w-[280px] shrink-0">
      <div>
        <Spherule logotype={true} size="sm" />
      </div>
    </div>
  );
};

export default SidebarNavigation;
