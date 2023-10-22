import type { StorybookConfig } from '@storybook/react-webpack5';

const config: StorybookConfig = {
  framework: {
    name: '@storybook/react-webpack5',
    options: {},
  },
  stories: ['../src/**/*.mdx', '../src/**/*.stories.@(js|jsx|mjs|ts|tsx)'],

  addons: [
    '@storybook/addon-essentials',
    '@storybook/preset-create-react-app',
    '@storybook/addon-mdx-gfm',
  ],

  staticDirs: ['../public'],

  docs: {
    autodocs: true,
  },
};

export default config;
