import type { Meta, StoryObj } from '@storybook/react';

import Component from './Simple';
import { Badge } from '@/stories/Components';

const meta = {
  title: 'Website Components/Pricing Sections/Pricing Cards',
  component: Component,
} satisfies Meta<typeof Component>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Simple: Story = {
  args: {
    title: 'Basic plan',
    badge: (
      <Badge color="brand" className="font-semibold">
        Popular
      </Badge>
    ),
    price: '$10',
    pricePer: 'per month',
    description: 'Basic features for up to 10 users.',
  },
};
