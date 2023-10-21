import { ComponentStory, ComponentMeta } from '@storybook/react';

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
