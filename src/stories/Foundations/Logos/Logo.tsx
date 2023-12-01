import React from "react";

export type OuterLogoProps = {
  logotype: boolean;
  white: boolean;
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
  outer,
}) => {
  if (outer.logotype) {
    return outer.white ? fullWhite : fullColor;
  } else {
    return outer.white ? shortWhite : shortColor;
  }
};

export default Logo;
