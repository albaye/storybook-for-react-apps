import type { Meta, StoryObj } from '@storybook/react';
import { rest } from 'msw';
import { BASE_URL } from 'api';
import { restaurants } from 'stub/restaurants';

import { HomePage } from './HomePage';

const meta: Meta<typeof HomePage> = {
  title: 'Pages/HomePage',
  component: HomePage,
  parameters: {
    layout: 'fullscreen',
    design: {
      type: 'figma',
      url: 'https://www.figma.com/file/3Q1HTCalD0lJnNvcMoEw1x/Mealdrop?type=design&node-id=135-258&mode=design&t=qLrX435tGuj0WU5f-4',
    },
    msw: {
      handlers: [rest.get(BASE_URL, (req, res, ctx) => res(ctx.json(restaurants)))],
    },
  },
};

export default meta;

type Story = StoryObj<typeof HomePage>;

export const Default: Story = {};
