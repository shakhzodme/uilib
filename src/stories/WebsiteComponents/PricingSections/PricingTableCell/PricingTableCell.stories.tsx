import type { Meta, StoryObj } from '@storybook/react';

import Component from './PricingTableCell';

const meta = {
  title: 'Website Components/Pricing Sections/Pricing Table Cell',
  component: Component,
} satisfies Meta<typeof Component>;

export default meta;
type Story = StoryObj<typeof meta>;

export const PricingTableCell: Story = {
  args: {
    title: 'Basic plan',
  },
};
