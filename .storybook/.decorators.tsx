import React from 'react';
import { ThemeProvider } from 'styled-components';
import { DecoratorFn } from '@storybook/react';

import { configureStore } from '@reduxjs/toolkit';
import { Provider as StoreProvider } from 'react-redux';
import { rootReducer } from '../src/app-state';

import { BrowserRouter } from 'react-router-dom';
import { withDesign } from 'storybook-addon-designs';
import { initialize, mswDecorator } from 'msw-storybook-addon';

import { GlobalStyle } from '../src/styles/GlobalStyle';
import { lightTheme, darkTheme } from '../src/styles/theme';

initialize();

const withRouter: DecoratorFn = (StoryFn) => {
  return (
    <BrowserRouter>
      <StoryFn />
    </BrowserRouter>
  );
};

const withStore: DecoratorFn = (StoryFn, { parameters }) => {
  const store = configureStore({
    reducer: rootReducer,
    preloadedState: parameters.store?.initialState,
  });
  return (
    <StoreProvider store={store}>
      <StoryFn />
    </StoreProvider>
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

export const globalDecorators = [mswDecorator, withTheme, withDesign, withRouter, withStore];
