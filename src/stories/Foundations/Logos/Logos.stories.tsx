import type { StoryObj } from "@storybook/react";
import { type OuterLogoProps } from "./Logo";
import Layers from "./Layers";
import Quotient from "./Quotient";
import Sisyphus from "./Sisyphus";
import Hourglass from "./Hourglass";
import Capsule from "./Capsule";
import CommandR from "./CommandR";
import Catalog from "./Catalog";
import GlobalBank from "./GlobalBank";
import Spherule from "./Spherule";
import Lightbox from "./Lightbox";
import Luminous from "./Luminous";
import AltShift from "./AltShift";
import FocalPoint from "./FocalPoint";
import Nietzsche from "./Nietzsche";
import Polymath from "./Polymath";
import Epicurious from "./Epicurious";
import AcmeCorp from "./AcmeCorp";
import Boltshift from "./Boltshift";
import Segment from "./Segment";
import CloudWatch from "./CloudWatch";
import FeatherDev from "./FeatherDev";
import Biosynthesis from "./Biosynthesis";
import Galileo from "./Galileo";
import Interlock from "./Interlock";

const meta = {
  title: "Foundations/Logos",
};

export default meta;
type Story = StoryObj<typeof meta>;

const DrawLogoVariants: React.FC<{
  Component: (props: OuterLogoProps) => React.ReactNode;
}> = ({ Component }) => {
  return (
    <div className="flex flex-col">
      <div className="flex gap-16 p-4 bg-white">
        <Component logotype={true} white={false} />
        <Component logotype={false} white={false} />
      </div>
      <div className="flex gap-16 p-4 bg-gray-700">
        <Component logotype={true} white={true} />
        <Component logotype={false} white={true} />
      </div>
    </div>
  );
};

export const All: Story = {
  render: () => {
    const Logos = [
      Layers,
      Quotient,
      Sisyphus,
      Hourglass,
      Capsule,
      CommandR,
      Catalog,
      GlobalBank,
      Spherule,
      Lightbox,
      Luminous,
      AltShift,
      FocalPoint,
      Nietzsche,
      Polymath,
      Epicurious,
      AcmeCorp,
      Boltshift,
      Segment,
      CloudWatch,
      FeatherDev,
      Biosynthesis,
      Galileo,
      Interlock,
    ];
    return (
      <div className="grid grid-cols-2">
        {Logos.map((Logo, index) => (
          <DrawLogoVariants key={index} Component={Logo} />
        ))}
      </div>
    );
  },
};
