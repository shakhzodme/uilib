import React from "react";

export type NavigationItemProps = {
  label: string;
  href?: string;
  items?: {
    label: string;
    href: string;
  }[];
};

const NavigationItem: React.FC<NavgiationItemProps> = ({
  label,
  href,
  items,
}) => {
  const Tag = items?.length ? "button" : "a";
  return <Tag>Navigation Item</Tag>;
};

export default NavigationItem;
