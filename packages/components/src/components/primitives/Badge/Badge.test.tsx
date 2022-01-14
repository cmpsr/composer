import React from 'react';
import { screen, renderWithProviders } from 'tests/renderWithProviders';
import { Badge } from '.';

describe('Badge', () => {
  const givenComponentRendered = () =>
    renderWithProviders(<Badge>Hello</Badge>);

  test('should render child', () => {
    givenComponentRendered();
    screen.getByText(/Hello/i);
  });
});
