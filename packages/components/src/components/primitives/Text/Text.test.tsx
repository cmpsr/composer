import React from 'react';
import { screen, renderWithProviders } from 'tests/renderWithProviders';
import { Text } from '.';

describe('Text', () => {
  const givenComponentRendered = () => renderWithProviders(<Text>Hello</Text>);

  test('should render child', () => {
    givenComponentRendered();
    screen.getByText(/Hello/i);
  });
});
