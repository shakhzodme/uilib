import { Button } from "@/stories/Components";
import React from "react";
import { ButtonProps } from "@/stories/Components/Button/Button";

const First: React.FC<{
  navigation: {
    title: string;
    links: ButtonProps<HTMLAnchorElement>[];
  }[];
}> = ({ navigation }) => {
  return (
    <div className="container mx-auto flex flex-col gap-16 pt-16 pb-12">
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-6 gap-8">
        {navigation.map((value, index) => (
          <div
            key={index}
            className="flex flex-col justify-center items-center gap-4 xl:items-start"
          >
            <p className="text-quarterary text-sm font-semibold">
              {value.title}
            </p>
            <nav className="flex flex-col gap-3 xl:items-start">
              {value.links.map((link, index) => (
                <Button
                  key={index}
                  className="p-0 text-center"
                  component="a"
                  variant="link-gray"
                  {...link}
                />
              ))}
            </nav>
          </div>
        ))}
      </div>
      <div className="flex flex-col gap-10">
        <div className="h-px w-full border-t border-secondary" />
        <div className="flex flex-col items-center gap-5 justify-between md:flex-row md:gap-0">
          <h1 className="text-xl font-bold">Logo</h1>
          <p className="text-md text-quarterary">
            © 2077 Untitled UI. All rights reserved.
          </p>
        </div>
      </div>
    </div>
  );
};

export default First;
