import React from 'react';
import { addDecorator } from '@storybook/react';
import { ComposerProvider } from '../src/theme';
import '@fontsource/inter/300.css';
import '@fontsource/inter/500.css';
import '@fontsource/inter/700.css';

export const parameters = {
  backgrounds: {
    default: 'light',
    values: [
      {
        name: 'light',
        value: '#FFFFFF',
      },
    ],
  },
  actions: { argTypesRegex: '^on[A-Z].*' },
  controls: {
    matchers: {
      color: /(background|color)$/i,
      date: /Date$/,
    },
  },
  docs: {
    source: {
      type: 'code',
    },
  },
};

const theme = {
  fonts: {
    heading: 'Inter',
    body: 'Inter',
  },
};
addDecorator((StoryFn) => (
  <ComposerProvider theme={theme}>
    <StoryFn />
  </ComposerProvider>
));
