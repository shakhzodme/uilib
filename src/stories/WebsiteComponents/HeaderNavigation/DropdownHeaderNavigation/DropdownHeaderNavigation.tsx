import { Button } from "@/stories/Components";
import React from "react";

const DropdownHeaderNavigation: React.FC = () => {
  return (
    <div className="flex items-center">
      <div>Logo</div>
      <nav>
        <a href="#">Home</a>
        <a href="#">Products</a>
        <a href="#">Resources</a>
        <a href="#">Pricing</a>
      </nav>
      <div className="flex-1"></div>
      <div>
        <Button variant="teritary-gray" size="lg">
          Log in
        </Button>
        <Button size="lg">Sign up</Button>
      </div>
    </div>
  );
};

export default DropdownHeaderNavigation;
