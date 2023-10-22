import React from 'react';
import { ThemeProvider } from 'styled-components';
import { DecoratorFn } from '@storybook/react';

import { configureStore } from '@reduxjs/toolkit';
import { Provider as StoreProvider } from 'react-redux';
import { rootReducer } from '../src/app-state';

import { BrowserRouter, MemoryRouter, Route, Routes } from 'react-router-dom';

import { GlobalStyle } from '../src/styles/GlobalStyle';
import { lightTheme, darkTheme } from '../src/styles/theme';

const withRouter: DecoratorFn = (StoryFn, { parameters: { deeplink } }) => {
  if (!deeplink) {
    return (
      <BrowserRouter>
        <StoryFn />
      </BrowserRouter>
    );
  }
  // path: "/restaurants/:id"
  // route: "/restaurants/1"
  const { path, route } = deeplink;
  return (
    <MemoryRouter initialEntries={[encodeURI(route)]}>
      <Routes>
        <Route path={path} element={<StoryFn />} />
      </Routes>
    </MemoryRouter>
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

export const globalDecorators = [withTheme, withRouter, withStore];
