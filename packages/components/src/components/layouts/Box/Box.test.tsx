import React from 'react';
import { screen, renderWithProviders } from '@tests/renderWithProviders';
import { Box } from './Box';

describe('Box', () => {
  const givenComponentRendered = () => renderWithProviders(<Box>Children</Box>);

  test('should render a children', () => {
    givenComponentRendered();
    screen.getByText(/Children/i);
  });
});
