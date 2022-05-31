import React from 'react';
import { screen, renderWithProviders } from '@tests/renderWithProviders';
import { Navigation } from './Navigation';

describe('Navigation', () => {
  const givenComponentRendered = () => renderWithProviders(<Navigation />);

  test('should render dummy block', () => {
    givenComponentRendered();
    screen.getByText(/Navigation/i);
  });
});
