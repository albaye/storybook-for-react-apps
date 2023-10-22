import type { Meta, StoryObj } from '@storybook/react';

import { restaurants } from '../../stub/restaurants';

import { RestaurantCard } from './RestaurantCard';

export default {
  title: 'Components/RestaurantCard',
  component: RestaurantCard,
  parameters: {
    design: {
      type: 'figspec',
      url: 'https://www.figma.com/file/3Q1HTCalD0lJnNvcMoEw1x/Mealdrop?node-id=1126%3A3893',
    },
  },
  args: {
    ...restaurants[0],
  },
} as Meta<typeof RestaurantCard>;

type Story = StoryObj<typeof RestaurantCard>;

export const Default: Story = {};

export const New: Story = {
  args: {
    isNew: true,
  },
};

export const Closed: Story = {
  args: {
    isClosed: true,
  },
};

export const Loading: Story = {
  args: {
    isLoading: true,
  },
};
