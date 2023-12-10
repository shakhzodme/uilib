import React from "react";
import * as Icons from "untitledui-js";
import { SVGComponentProps } from "untitledui-js";

export default function IconControl() {
  const iconMap: Record<string, React.FC<SVGComponentProps>> = Object.keys(
    Icons,
    // @ts-expect-error
  ).reduce((acc, key) => Object.assign(acc, Icons[key]), {});
  return {
    options: ["none", ...Object.keys(iconMap)],
    mapping: {
      none: null,
      ...Object.keys(iconMap).reduce((acc, val) => {
        const Component = iconMap[val];
        return Object.assign(acc, {
          [val]: <Component stroke="currentColor" />,
        });
      }, {}),
    },
    control: {
      labels: {
        none: "No Icon",
        ...Object.keys(iconMap),
      },
    },
  };
}
