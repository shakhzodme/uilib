import { Button } from "@/stories/Components";
import React from "react";

const First: React.FC = () => {
  return (
    <div>
      <div>
        <p>Product</p>
        <nav>
          <Button component="a" href="#" variant="link-gray">
            Overview
          </Button>
          <Button component="a" href="#" variant="link-gray">
            Features
          </Button>
          <Button component="a" href="#" variant="link-gray">
            Solutions
          </Button>
          <Button component="a" href="#" variant="link-gray">
            Tutorials
          </Button>
          <Button component="a" href="#" variant="link-gray">
            Pricing
          </Button>
          <Button component="a" href="#" variant="link-gray">
            Releases
          </Button>
        </nav>
      </div>
      <div>lower side</div>
    </div>
  );
};

export default First;
