import { addDecorator } from '@storybook/react';
import { ComposerProvider } from '../src/theme';

export const parameters = {
  actions: { argTypesRegex: '^on[A-Z].*' },
  controls: {
    matchers: {
      color: /(background|color)$/i,
      date: /Date$/,
    },
  },
};

addDecorator((story) => <ComposerProvider>{story()}</ComposerProvider>);
