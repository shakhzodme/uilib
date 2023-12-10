import React from "react";
import FeatureText from "../../BaseComponents/FeatureText/FeatureText";
import { Charts, Communication, Editor, General } from "untitledui-js";

const Third: React.FC = () => {
  return (
    <div className="container mx-auto py-24">
      <div className="xl:w-3/5 mb-16 text-center mx-auto">
        <h3 className="text-brand-secondary text-md font-semibold mb-3">
          Features
        </h3>
        <h1 className="text-display-md font-semibold mb-5">
          Beautiful analytics to grow smarter
        </h1>
        <p className="text-tertiary text-xl">
          Powerful, self-serve product and growth analytics to help you convert,
          engage, and retain more users. Trusted by over 4,000 startups.
        </p>
      </div>
      <div className="grid md:grid-cols-2 xl:grid-cols-3 gap-y-8 gap-x-16">
        <FeatureText
          icon={<Communication.MessageChatCircle />}
          iconFeatured={true}
          heading="Share team inboxes"
          description="Whether you have a team of 2 or 200, our shared team inboxes keep everyone on the same page and in the loop."
          buttonText="Learn more"
        />
        <FeatureText
          icon={<General.Zap />}
          iconFeatured={true}
          heading="Deliver instant answers"
          description="An all-in-one customer service platform that helps you balance everything your customers need to be happy."
          buttonText="Learn more"
        />
        <FeatureText
          icon={<Charts.ChartBreakoutSquare />}
          iconFeatured={true}
          heading="Manage your team with reports"
          description="Measure what matters with Untitled’s easy-to-use reports. You can filter, export, and drilldown on the data in a couple clicks."
          buttonText="Learn more"
        />
        <FeatureText
          icon={<Communication.MessageSmileCircle />}
          iconFeatured={true}
          heading="Connect with customers"
          description="Solve a problem or close a sale in real-time with chat. If no one is available, customers are seamlessly routed to email without confusion."
          buttonText="Learn more"
        />
        <FeatureText
          icon={<Editor.Command />}
          iconFeatured={true}
          heading="Connect the tools you already use"
          description="Explore 100+ integrations that make your day-to-day workflow more efficient and familiar. Plus, our extensive developer tools."
          buttonText="Learn more"
        />
        <FeatureText
          icon={<Communication.MessageHeartCircle />}
          iconFeatured={true}
          heading="Our people make the difference"
          description="We’re an extension of your customer service team, and all of our resources are free. Chat to our friendly team 24/7 when you need help."
          buttonText="Learn more"
        />
      </div>
    </div>
  );
};

export default Third;
