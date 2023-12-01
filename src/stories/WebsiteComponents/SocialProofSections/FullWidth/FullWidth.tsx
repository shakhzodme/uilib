import useDarkMode from "@/hooks/use-dark-mode";
import {
  Boltshift,
  FeatherDev,
  GlobalBank,
  Lightbox,
  Nietzsche,
  Spherule,
  type LogoProps,
} from "@/stories/Foundations/Logos";
import cn from "@/utils/cn";
import { useMediaQuery } from "@uidotdev/usehooks";
import React from "react";

const FullWidth: React.FC<{
  brand?: boolean;
}> = ({ brand = false }) => {
  const isMobile = useMediaQuery("(max-width: 640px)");
  const isDarkMode = useDarkMode();

  const logoProps: LogoProps = {
    logotype: true,
    white: isDarkMode || brand,
    size: isMobile ? "sm" : "md",
  };

  return (
    <div
      className={cn("py-24 text-center", {
        "bg-brand-section text-tertiary_on-brand": brand,
        "bg-primary text-tertiary": !brand,
      })}
    >
      <p className="text-md font-medium mb-8">
        Join 4,000+ companies already growing
      </p>
      <div className="flex flex-wrap justify-center gap-6">
        <Boltshift {...logoProps} />
        <Lightbox {...logoProps} />
        <FeatherDev {...logoProps} />
        <Spherule {...logoProps} />
        <GlobalBank {...logoProps} />
        <Nietzsche {...logoProps} />
      </div>
    </div>
  );
};

export default FullWidth;
