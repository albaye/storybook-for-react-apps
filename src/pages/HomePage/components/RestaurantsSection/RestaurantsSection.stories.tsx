import { ComponentStory, ComponentMeta } from '@storybook/react';
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
} as ComponentMeta<typeof RestaurantsSection>;

const Template: ComponentStory<typeof RestaurantsSection> = (args) => (
  <RestaurantsSection {...args} />
);

export const Default = Template.bind({});
Default.args = {
  title: 'Our favourites',
};

Default.parameters = {
  msw: {
    handlers: [rest.get(BASE_URL, (req, res, ctx) => res(ctx.json(restaurants)))],
  },
};

export const Loading = Template.bind({});
Loading.args = {
  ...Default.args,
};

Loading.parameters = {
  msw: {
    handlers: [rest.get(BASE_URL, (req, res, ctx) => res(ctx.delay('infinite')))],
  },
};
