import type { Meta, StoryObj } from '@storybook/react';
import { rest } from 'msw';
import { BASE_URL } from 'api';
import { restaurants } from 'stub/restaurants';

import { RestaurantDetailPage } from './RestaurantDetailPage';

export default {
  title: 'Pages/RestaurantDetailPage',
  component: RestaurantDetailPage,
  parameters: {
    layout: 'fullscreen',
    deeplink: {
      path: '/restaurants/:id',
      route: '/restaurants/1',
    },
  },
  render: () => (
    <>
      <RestaurantDetailPage />
      <div id="modal" />
    </>
  ),
} as Meta<typeof RestaurantDetailPage>;

// const Template: StoryObj<typeof RestaurantDetailPage> = () => (
//   <>
//     <RestaurantDetailPage />
//     <div id="modal" />
//   </>
// );

type Story = StoryObj<typeof RestaurantDetailPage>;

export const Success: Story = {
  parameters: {
    design: {
      type: 'figma',
      url: 'https://www.figma.com/proto/3Q1HTCalD0lJnNvcMoEw1x/Mealdrop?type=design&node-id=169-510&t=pAqBqebU2qk3qLNP-0&scaling=min-zoom&page-id=135%3A257&starting-point-node-id=135%3A258',
      msw: {
        handlers: [rest.get(BASE_URL, (req, res, ctx) => res(ctx.json(restaurants)))],
      },
    },
  },
};

export const Loading: Story = {
  parameters: {
    design: {
      type: 'figma',
      url: 'https://www.figma.com/file/3Q1HTCalD0lJnNvcMoEw1x/Mealdrop?type=design&node-id=2152-3158&mode=design&t=pAqBqebU2qk3qLNP-4',
    },
    msw: {
      handlers: [rest.get(BASE_URL, (req, res, ctx) => res(ctx.delay('infinite')))],
    },
  },
};

export const NotFound: Story = {
  parameters: {
    design: {
      type: 'figma',
      url: 'https://www.figma.com/file/3Q1HTCalD0lJnNvcMoEw1x/Mealdrop?type=design&node-id=1097-3785&mode=design&t=pAqBqebU2qk3qLNP-4',
    },
    msw: {
      handlers: [rest.get(BASE_URL, (req, res, ctx) => res(ctx.status(404)))],
    },
  },
};

export const Error = {
  parameters: {
    design: {
      type: 'figma',
      url: 'https://www.figma.com/file/3Q1HTCalD0lJnNvcMoEw1x/Mealdrop?type=design&node-id=1097-3785&mode=design&t=pAqBqebU2qk3qLNP-4',
    },
    msw: {
      handlers: [rest.get(BASE_URL, (req, res, ctx) => res(ctx.status(500)))],
    },
  },
};
