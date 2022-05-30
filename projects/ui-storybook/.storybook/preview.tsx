import React from 'react';
import { ComposerProvider, createBreakpoints } from '@cmpsr/components';
import '@fontsource/inter/300.css';
import '@fontsource/inter/500.css';
import '@fontsource/inter/700.css';

const breakpoints = createBreakpoints({
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
        styles: { width: '413px', height: '100%' },
      },
      md: {
        name: 'md (768px)',
        styles: { width: '767px', height: '100%' },
      },
      lg: {
        name: 'lg (1024px)',
        styles: { width: '1023px', height: '100%' },
      },
      xl: {
        name: 'xl (1280px)',
        styles: { width: '1279px', height: '100%' },
      },
      xxl: {
        name: 'xxl (1440px)',
        styles: { width: '1439px', height: '100%' },
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
