import cn from "@/utils/cn";
import React from "react";

const SectionDivider: React.FC<{ className?: string }> = ({ className }) => {
  return (
    <div className={cn("h-0 border-b border-secondary container", className)} />
  );
};

SectionDivider.displayName = "SectionDivider";

export default SectionDivider;
