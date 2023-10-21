import React from 'react';
import { ThemeProvider } from 'styled-components';
import { DecoratorFn } from '@storybook/react';

import { BrowserRouter } from 'react-router-dom';
import { withDesign } from 'storybook-addon-designs';

import { GlobalStyle } from '../src/styles/GlobalStyle';
import { lightTheme, darkTheme } from '../src/styles/theme';

const withRouter: DecoratorFn = (StoryFn) => {
  return (
    <BrowserRouter>
      <StoryFn />
    </BrowserRouter>
  );
};
const withTheme: DecoratorFn = (StoryFn, context) => {
  const theme = context.parameters.theme ?? context.globals.theme;
  const storyTheme = theme === 'dark' ? darkTheme : lightTheme;
  console.log(theme);
  return (
    <ThemeProvider theme={storyTheme}>
      <GlobalStyle />
      <StoryFn />
    </ThemeProvider>
  );
};

export const globalDecorators = [withTheme, withDesign, withRouter];
