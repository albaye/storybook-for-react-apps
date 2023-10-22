import type { Meta, StoryObj } from '@storybook/react';
import { rest } from 'msw';
import { BASE_URL } from 'api';
import { restaurants } from 'stub/restaurants';

import { RestaurantsSection } from './RestaurantsSection';

export default {
  title: 'Pages/HomePage/Components/RestaurantsSection',
  component: RestaurantsSection,
  parameters: {
    design: {
      type: 'figspec',
      url: 'https://www.figma.com/file/3Q1HTCalD0lJnNvcMoEw1x/Mealdrop?type=design&node-id=135-311&mode=design&t=APKbQdxjJU5XhrUV-4',
    },
  },
} as Meta<typeof RestaurantsSection>;

type Story = StoryObj<typeof RestaurantsSection>;

export const Default: Story = {
  args: {
    title: 'Our favourites',
  },
  parameters: {
    msw: {
      handlers: [rest.get(BASE_URL, (req, res, ctx) => res(ctx.json(restaurants)))],
    },
  },
};
export const Loading: Story = {
  args: {
    ...Default.args,
  },
  parameters: {
    msw: {
      handlers: [rest.get(BASE_URL, (req, res, ctx) => res(ctx.delay('infinite')))],
    },
  },
};
