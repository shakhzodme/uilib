import type { Meta, StoryObj } from '@storybook/react';

import Component from './Third';

const meta = {
  title: 'Website Components/CTA Sections/Screen Mockup/Third',
  component: Component,
} satisfies Meta<typeof Component>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Third: Story = {};
