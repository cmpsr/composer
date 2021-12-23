import React from 'react';
import { screen, renderWithProviders } from 'tests/renderWithProviders';
import { Grid } from './Grid';

describe('Grid', () => {
  const givenComponentRendered = () =>
    renderWithProviders(<Grid>Children</Grid>);

  test('should render a children', () => {
    givenComponentRendered();
    screen.getByText(/Children/i);
  });
});
