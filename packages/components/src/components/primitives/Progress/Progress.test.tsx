import React from 'react';
import { screen, renderWithProviders } from '@tests/renderWithProviders';
import { Progress } from './Progress';

describe('Progress', () => {
  const givenComponentRendered = () => renderWithProviders(<Progress value={10} />);

  test('should render progress bar', () => {
    givenComponentRendered();
    screen.getByTestId('cmpsr.progress');
  });
});
