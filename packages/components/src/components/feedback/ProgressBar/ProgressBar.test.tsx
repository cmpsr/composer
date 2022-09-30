import React from 'react';
import { screen, renderWithProviders } from '@tests/renderWithProviders';
import { ProgressBar } from './ProgressBar';

describe('ProgressBar', () => {
  const givenComponentRendered = () => renderWithProviders(<ProgressBar value={10} />);

  test('should render progress bar', () => {
    givenComponentRendered();
    screen.getByTestId('cmpsr.progress-bar');
  });
});
