import React from 'react';
import { render, screen } from '@testing-library/react';
import { useTheme } from '@chakra-ui/system';
import { ComposerProvider } from '.';
import { theme } from '@theme';

const ThemeWrapper = () => {
  const theme = useTheme();
  return <>{theme.__cssVars['--chakra-colors-alert-error-default']}</>;
};

describe('useComposerProvider', () => {
  const givenComponentRendered = (children: React.ReactNode) => render(<ComposerProvider>{children}</ComposerProvider>);

  test('should render component and children', () => {
    givenComponentRendered(<>Children</>);
    screen.getByText('Children');
  });

  test('should add composer theme props to the theme', () => {
    givenComponentRendered(<ThemeWrapper />);
    screen.getByText(theme.colors['alert-error-default']);
  });
});
