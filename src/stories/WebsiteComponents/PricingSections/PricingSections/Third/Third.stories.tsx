import type { Meta, StoryObj } from '@storybook/react';

import Component from './Third';

const meta = {
  title: 'Website Components/Pricing Sections/Pricing Sections',
  component: Component,
} satisfies Meta<typeof Component>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Simple: Story = {};
