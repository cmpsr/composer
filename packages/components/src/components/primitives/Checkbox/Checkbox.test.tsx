import React from 'react';
import { screen, renderWithProviders } from '@tests/renderWithProviders';
import { Checkbox } from './Checkbox';

describe('Checkbox', () => {
  const givenComponentRendered = () => renderWithProviders(<Checkbox>Hello</Checkbox>);

  test('should render child', () => {
    givenComponentRendered();
    screen.getByText(/Hello/i);
  });
});
