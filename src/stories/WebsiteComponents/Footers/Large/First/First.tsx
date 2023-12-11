import { Button } from "@/stories/Components";
import React from "react";

const First: React.FC = () => {
  return (
    <div>
      <div>
        <p>Product</p>
        <nav>
          <Button variant="link-gray">Overview</Button>
          <Button variant="link-gray">Features</Button>
          <Button variant="link-gray">Solutions</Button>
          <Button variant="link-gray">Tutorials</Button>
          <Button variant="link-gray">Pricing</Button>
          <Button variant="link-gray">Releases</Button>
        </nav>
      </div>
      <div>lower side</div>
    </div>
  );
};

export default First;
