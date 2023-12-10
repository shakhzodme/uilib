import useDarkMode from "@/hooks/use-dark-mode";
import { Sisyphus } from "@/stories/Foundations/Logos";
import React from "react";

const Simple: React.FC = () => {
  const isDark = useDarkMode();
  return (
    <div className="text-center py-24 container mx-auto">
      <Sisyphus
        logotype={true}
        white={isDark}
        size="sm"
        className="mb-8 mx-auto"
      />
      <h1 className="text-display-sm xl:text-display-lg font-medium mb-8">
        We’ve been using Untitled to kick start every new project and can’t
        imagine working without it.
      </h1>
      <div className="mb-4">Avatar</div>
      <h3 className="mb-1 text-lg font-semibold">Amélie Laurent</h3>
      <p className="text-md text-tertiary">Product Manager, Sisyphus</p>
    </div>
  );
};

Simple.displayName = "Simple";

export default Simple;
