import { Button } from "@/stories/Components";
import React from "react";
import { ButtonProps } from "@/stories/Components/Button/Button";
import { FaGithub, FaTelegram, FaXTwitter } from "react-icons/fa6";
import { FaFacebook, FaInstagram } from "react-icons/fa6";
import { SlSocialDribbble } from "react-icons/sl";

const Second: React.FC<{
  navigation: {
    title: string;
    links: ButtonProps<HTMLAnchorElement>[];
  }[];
}> = ({ navigation }) => {
  const icons = [
    { link: "#", title: <FaXTwitter size={24} /> },
    { link: "#", title: <FaInstagram size={24} /> },
    { link: "#", title: <FaFacebook size={24} /> },
    { link: "#", title: <FaGithub size={24} /> },
    { link: "#", title: <FaTelegram size={24} /> },
    { link: "#", title: <SlSocialDribbble size={24} /> },
  ];
  return (
    <>
      <div className="container mx-auto w-full flex flex-col gap-12 py-16">
        <div className="flex w-full flex-col gap-12 md:gap-16 md:flex-row md:justify-between">
          <div className="flex flex-col gap-6 md:gap-8">
            <h1 className="text-xl font-bold">Logo</h1>
            <p className="text-md text-quarterary w-full md:w-2/3">
              Design amazing digital experiences that create more happy in the
              world.
            </p>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-3 xl:grid-cols-6 gap-8">
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
        </div>
      </div>
      <div className="flex bg-secondary_alt">
        <div className="container mx-auto flex gap-4 md:gap-0 flex-col w-full md:flex-row md:justify-between md:items-center py-10 md:py-12">
          <p className="text-md text-quarterary order-last md:order-first">
            © 2077 Untitled UI. All rights reserved.
          </p>
          <div className="flex md:justify-center gap-4">
            {icons.map((icon, index) => (
              <a href={icon.link} className="fg-quinary-400" key={index}>
                {icon.title}
              </a>
            ))}
          </div>
        </div>
      </div>
    </>
  );
};

export default Second;
