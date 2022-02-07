import React from 'react';
import { screen, renderWithProviders } from '@tests/renderWithProviders';
import { Spinner } from './Spinner';

describe('Spinner', () => {
  const givenComponentRendered = () => renderWithProviders(<Spinner />);

  test('should render loading label for accessibility', () => {
    givenComponentRendered();
    screen.getByText(/Loading.../i);
  });
});
