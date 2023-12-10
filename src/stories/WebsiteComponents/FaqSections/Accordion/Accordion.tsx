import React from "react";
import FaqItem from "../BaseComponents/FaqItem/FaqItem";
import { Button } from "@/stories/Components";

const Accordion: React.FC = () => {
  return (
    <div className="py-24 container mx-auto">
      <h1 className="mb-5 text-display-sm lg:text-display-md font-semibold text-center">
        Frequently asked questions
      </h1>
      <p className="mb-16 text-xl text-tertiary text-center">
        Everything you need to know about the product and billing.
      </p>

      <div className="mb-16 mx-auto lg:w-3/4 xl:w-2/3">
        <FaqItem
          title="Is there a free trial available?"
          content="Yes, you can try us for free for 30 days. If you want, we’ll provide you with a free, personalized 30-minute onboarding call to get you up and running as soon as possible."
          icon={true}
          iconPosition="right"
        />
        <FaqItem
          title="Is there a free trial available?"
          content="Yes, you can try us for free for 30 days. If you want, we’ll provide you with a free, personalized 30-minute onboarding call to get you up and running as soon as possible."
          icon={true}
          iconPosition="right"
          divider={true}
        />
        <FaqItem
          title="Is there a free trial available?"
          content="Yes, you can try us for free for 30 days. If you want, we’ll provide you with a free, personalized 30-minute onboarding call to get you up and running as soon as possible."
          icon={true}
          iconPosition="right"
          divider={true}
        />
      </div>

      <div className="bg-secondary pt-8 pb-10 px-8 text-center rounded-2xl">
        <div className="mb-8">Avatars</div>
        <h4 className="text-xl font-semibold mb-2">Still have questions?</h4>
        <p className="text-lg text-tertiary mb-8">
          Can’t find the answer you’re looking for? Please chat to our friendly
          team.
        </p>
        <Button>Get in touch</Button>
      </div>
    </div>
  );
};

export default Accordion;
