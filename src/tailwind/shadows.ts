import { rawFocusRings } from "../colors/focus-rings";
import { rawShadows } from "../colors/shadows";

const allShadows = { ...rawShadows, ...rawFocusRings };

export const shadows = Object.keys(allShadows).reduce((acc, key) => {
  const shadow = allShadows[key];
  return Object.assign(
    acc,
    {
      [key]: shadow
        .map(
          ({ x, y, blur, spread, color, opacity }) =>
            `${x}px ${y}px ${blur}px ${spread}px ${color}`,
        )
        .join(", "),
    },
    {},
  );
}, {});
