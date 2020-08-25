import { addParameters, addDecorator } from '@storybook/react';
import { withA11y } from '@storybook/addon-a11y';
import { INITIAL_VIEWPORTS } from '@storybook/addon-viewport';
import { DocsPage, DocsContainer } from '@storybook/addon-docs/blocks';
import { withPerformance } from 'storybook-addon-performance';
import { withKnobs } from '@storybook/addon-knobs';

import '../src/styles/index.css';

addParameters({
  viewport: {
    viewports: INITIAL_VIEWPORTS,
  },
  decorators: [
    withA11y,
    withKnobs({
      escapeHTML: false,
    }),
  ],
  docs: {
    container: DocsContainer,
    page: DocsPage,
  },
});

addDecorator(withPerformance);
