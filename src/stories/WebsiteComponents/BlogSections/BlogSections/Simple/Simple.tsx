import React from "react";
import { Button } from "@/index";
import SimpleCard from "../../BlogCards/Simple/Simple";

const Simple: React.FC = () => {
  return (
    <div className="container mx-auto py-24 grid grid-cols-1 md:grid-cols-3 gap-y-16">
      <div className="col-span-2 order-1">
        <h3 className="text-md font-semibold text-brand-secondary mb-3">
          Our blog
        </h3>
        <h1 className="text-display-md font-semibold mb-5">
          Latest blog posts
        </h1>
        <p className="text-xl text-tertiary">
          Tool and strategies modern teams need to help their companies grow.
        </p>
      </div>
      <div className="text-right order-3 lg:order-2">
        <Button className="w-full md:w-auto">View all posts</Button>
      </div>
      <div className="grid sm:grid-cols-2 order-2 md:order-3 md:grid-cols-3 gap-8 col-span-3">
        <SimpleCard
          image={
            <img src="https://images.unsplash.com/photo-1663947718652-fa32fb546da2?q=80&w=1740&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" />
          }
          tag="Design"
          title="UX review presentations"
          description="How do you create compelling presentations that wow your colleagues and impress your managers?"
        />
        <SimpleCard
          image={
            <img src="https://images.unsplash.com/photo-1701839339832-158736f88c0f?q=80&w=1740&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" />
          }
          tag="Product"
          title="Migrating to Linear 101"
          description="Linear helps streamline software projects, sprints, tasks, and bug tracking. Here’s how to get started."
        />
        <SimpleCard
          image={
            <img src="https://images.unsplash.com/photo-1701352281550-4a7b283df099?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" />
          }
          tag="Software Engineering"
          title="Building your API stack"
          description="The rise of RESTful APIs has been met by a rise in tools for creating, testing, and managing them."
        />
      </div>
    </div>
  );
};

export default Simple;
