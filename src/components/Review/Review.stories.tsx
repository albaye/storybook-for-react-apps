import type { Meta, StoryObj } from '@storybook/react';

import { Review } from './Review';

export default {
  title: 'Components/Review',
  component: Review,
  argTypes: {
    rating: {
      control: {
        type: 'range', // slider
        min: 0,
        max: 5,
        step: 0.1,
      },
    },
  },
} as Meta<typeof Review>;

type Story = StoryObj<typeof Review>;

export const Default: Story = {};

export const Excellent: Story = {
  args: {
    rating: 5,
  },
};
export const VeryGood: Story = {
  args: {
    rating: 4.3,
  },
};
export const Adequate: Story = {
  args: {
    rating: 2.5,
  },
};
export const VeryPoor: Story = {
  args: {
    rating: 1,
  },
};
