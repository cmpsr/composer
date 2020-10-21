import React from 'react';
import { addParameters, addDecorator } from '@storybook/react';
import { withA11y } from '@storybook/addon-a11y';
import { INITIAL_VIEWPORTS } from '@storybook/addon-viewport';
import { DocsPage, DocsContainer } from '@storybook/addon-docs/blocks';
import { withPerformance } from 'storybook-addon-performance';
import { withKnobs } from '@storybook/addon-knobs';
import { ThemeProvider } from 'styled-components';
import theme from '../src/styles/theme';

import '../src/styles/index.css';

addParameters({
  viewport: {
    viewports: INITIAL_VIEWPORTS
  },
  decorators: [withA11y, withKnobs],
  docs: {
    container: DocsContainer,
    page: DocsPage
  }
});

addDecorator(withPerformance);

addDecorator(story => <ThemeProvider theme={theme}>{story()}</ThemeProvider>);
