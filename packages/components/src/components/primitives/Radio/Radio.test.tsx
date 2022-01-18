import React from 'react';
import { screen, renderWithProviders } from 'tests/renderWithProviders';
import { Radio } from './Radio';

describe('Radio', () => {
  const givenComponentRendered = () =>
    renderWithProviders(<Radio>Hello</Radio>);

  test('should render child', () => {
    givenComponentRendered();
    screen.getByText(/Hello/i);
  });
});
