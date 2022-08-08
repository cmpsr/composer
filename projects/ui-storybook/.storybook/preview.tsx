import React from 'react';
import { ComposerProvider, createBreakpoints } from '@cmpsr/components';
import '@fontsource/inter/300.css';
import '@fontsource/inter/500.css';
import '@fontsource/inter/700.css';

const breakpoints = createBreakpoints({
  base: '0px',
  sm: '414px',
  md: '768px',
  lg: '1024px',
  xl: '1280px',
  '2xl': '1440px',
  xxl: '1440px',
});

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
  viewport: {
    viewports: {
      sm: {
        name: 'sm (414px)',
        styles: { width: '414px', height: '100%' },
      },
      md: {
        name: 'md (768px)',
        styles: { width: '768px', height: '100%' },
      },
      lg: {
        name: 'lg (1024px)',
        styles: { width: '1024px', height: '100%' },
      },
      xl: {
        name: 'xl (1280px)',
        styles: { width: '1280px', height: '100%' },
      },
      xxl: {
        name: 'xxl (1440px)',
        styles: { width: '1440px', height: '100%' },
      },
    },
  },
};

const theme = {
  fonts: {
    heading: 'Inter',
    body: 'Inter',
  },
  breakpoints,
};

export const decorators = [
  (Story) => (
    <ComposerProvider theme={theme}>
      <Story />
    </ComposerProvider>
  ),
];
