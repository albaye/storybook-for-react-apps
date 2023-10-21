import { ComponentStory, ComponentMeta } from '@storybook/react';

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
} as ComponentMeta<typeof RestaurantDetailPage>;

const Template: ComponentStory<typeof RestaurantDetailPage> = () => (
  <>
    <RestaurantDetailPage />
    <div id="modal" />
  </>
);

export const Success = Template.bind({});
Success.parameters = {
  design: {
    type: 'figma',
    url: 'https://www.figma.com/proto/3Q1HTCalD0lJnNvcMoEw1x/Mealdrop?type=design&node-id=169-510&t=pAqBqebU2qk3qLNP-0&scaling=min-zoom&page-id=135%3A257&starting-point-node-id=135%3A258',
  },
};
