import React from "react";
import { FeaturedCardProps } from "./FeaturedCard/FeaturedCard";
import { type ButtonProps, type BadgeProps } from "@/index";

export type NavigationItem = {
  label: string;
  href?: string;
  onClick?: React.AnchorHTMLAttributes<HTMLAnchorElement>["onClick"];
};

export type NavigationMenuItem = {
  title: string;
  description: string;
  button?: ButtonProps;
  badge?: BadgeProps;
  icon?: React.ReactNode;
  iconFeatured?: boolean;
};

export interface SimpleNavigationTrigger {
  name: "simple";
  items: NavigationMenuItem[];
  columns?: 1 | 2;
  footer?: React.ReactNode;
}

export interface FeaturedCardNavigationTrigger {
  name: "featured-card";
  items: NavigationMenuItem[];
  featureCard: FeaturedCardProps;
}

export type NavigationWithTrigger = NavigationItem & {
  trigger?: SimpleNavigationTrigger | FeaturedCardNavigationTrigger;
};
