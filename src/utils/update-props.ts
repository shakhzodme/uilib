import React from "react";

export default function updateProps<P extends object>(
  component: React.ReactNode,
  props: P & React.Attributes,
  ...children: React.ReactNode[]
) {
  if (!component) return null;
  if (typeof component == "string") return component;
  if (typeof component == "number") return component;
  if (typeof component == "boolean") return component;
  if (Symbol.iterator in component) return component;

  return React.cloneElement(component, props, ...children);
}
