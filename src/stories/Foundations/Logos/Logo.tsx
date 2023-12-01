import React from "react";

export type OuterLogoProps = {
  logotype?: boolean;
  white?: boolean;
  size?: "sm" | "md";
};

export type InnerLogoProps = {
  shortWhite: React.ReactNode;
  fullWhite: React.ReactNode;
  shortColor: React.ReactNode;
  fullColor: React.ReactNode;
  outer: OuterLogoProps;
};

const Logo: React.FC<InnerLogoProps> = ({
  shortWhite,
  fullWhite,
  shortColor,
  fullColor,
  outer = { logotype: true, white: false, size: "md" },
}) => {
  let ActiveComponent: React.ReactNode | null = null;
  if (outer.logotype) {
    ActiveComponent = outer.white ? fullWhite : fullColor;
  } else {
    ActiveComponent = outer.white ? shortWhite : shortColor;
  }

  const size = outer.size ?? "md";
  const sizeInPx = size == "md" ? "48px" : size == "sm" ? "36px" : undefined;

  const Component = () =>
    // @ts-expect-error
    React.cloneElement(ActiveComponent, { style: { height: sizeInPx } });

  return <Component />;
};

Logo.displayName = "Logo";

export default Logo;
