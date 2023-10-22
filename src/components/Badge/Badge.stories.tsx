import type { Meta, StoryObj } from '@storybook/react';

import { Badge } from './Badge';

export default {
  title: 'Components/Badge',
  component: Badge,
  args: {
    text: 'Comfort food',
  },
  parameters: {
    design: {
      type: 'figspec',
      url: 'https://www.figma.com/file/3Q1HTCalD0lJnNvcMoEw1x/Mealdrop?type=design&node-id=1906-3469&mode=design&t=gctJq2mbEVLsCjky-4',
    },
  },
} as Meta<typeof Badge>;

type Story = StoryObj<typeof Badge>;
export const Default: Story = {
  render: (args) => <Badge {...args} />,
};

export const DarkTheme: Story = {
  render: (args) => <Badge {...args} />,
  parameters: {
    theme: 'dark',
  },
};
