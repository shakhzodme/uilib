import React from "react";

export default function IconControl(iconMap: Record<string, React.ReactNode>) {
  return {
    options: ["none", ...Object.keys(iconMap)],
    mapping: {
      none: null,
      ...Object.keys(iconMap).reduce((acc, val) => {
        const Component = iconMap[val];
        // @ts-expect-error
        return Object.assign(acc, { [val]: <Component /> });
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
