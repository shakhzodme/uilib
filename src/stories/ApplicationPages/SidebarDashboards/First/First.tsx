import SidebarNavigation from "@/stories/ApplicationComponents/ApplicationNavigation/SidebarNavigation/SidebarNavigation";
import React from "react";

const First: React.FC = () => {
  return (
    <div className="h-screen flex">
      <SidebarNavigation />
      <div className="flex-1 border-l border-secondary">Content</div>
    </div>
  );
};

export default First;
