import type { Meta, StoryObj } from "@storybook/react";

import Component from "./SimpleTrigger";
import NavigationItem from "../../NavigationItem/NavigationItem";
import { Arrow, Education } from "untitledui-js";
import { Button } from "@/stories/Components";

const meta = {
  title: "Website Components/Header Navigation/Base Components/Triggers",
  component: Component,
} satisfies Meta<typeof Component>;

export default meta;
type Story = StoryObj<typeof meta>;

export const SimpleTrigger: Story = {
  render: () => (
    <div className="p-6 flex justify-left">
      <NavigationItem
        label="Resources"
        trigger={{
          name: "simple",
          items: [
            {
              title: "Blog",
              description: "The latest industry news, updates and info.",
              icon: <Education.BookClosed />,
            },
          ],
        }}
      />
    </div>
  ),
};

export const SimpleTriggerWithFooter: Story = {
  render: () => (
    <div className="p-6 flex justify-left">
      <NavigationItem
        label="Resources"
        trigger={{
          name: "simple",
          items: [
            {
              title: "Blog",
              description: "The latest industry news, updates and info.",
              icon: <Education.BookClosed />,
            },
          ],
          footer: (
            <div className="w-full flex justify-center">
              <Button
                variant="link-color"
                component="a"
                href="#"
                className="p-0"
                rightIcon={<Arrow.ArrowRight />}
              >
                All resources
              </Button>
            </div>
          ),
        }}
      />
    </div>
  ),
};

export const Simple2Columns: Story = {
  render: () => (
    <div className="p-6 flex justify-left">
      <NavigationItem
        label="Resources"
        trigger={{
          name: "simple",
          columns: 2,
          items: [
            {
              title: "Blog",
              description: "The latest industry news, updates and info.",
              icon: <Education.BookClosed />,
            },
            {
              title: "Blog",
              description: "The latest industry news, updates and info.",
              icon: <Education.BookClosed />,
            },
          ],
        }}
      />
    </div>
  ),
};
