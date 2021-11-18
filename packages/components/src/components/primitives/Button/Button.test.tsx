import React from 'react';
import { screen, renderWithProviders } from 'tests/renderWithProviders';
import { Button } from './Button';

describe('Text', () => {
  const givenComponentRendered = () =>
    renderWithProviders(<Button>Hello</Button>);

  test('should render child', () => {
    givenComponentRendered();
    screen.getByText(/Hello/i);
  });
});
