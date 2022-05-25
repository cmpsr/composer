import React from 'react';
import { ComposerProvider } from '@cmpsr/components';
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

export const decorators = [
  (Story) => (
    <ComposerProvider theme={theme}>
      <Story />
    </ComposerProvider>
  ),
];
