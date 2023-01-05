import React from 'react';
import { screen, renderWithProviders } from '@tests/renderWithProviders';
import { Card } from './Card';

describe('Card', () => {
  const givenComponentRendered = () => renderWithProviders(<Card>Children</Card>);

  test('should render a children', () => {
    givenComponentRendered();
    screen.getByText(/Children/i);
  });
});
