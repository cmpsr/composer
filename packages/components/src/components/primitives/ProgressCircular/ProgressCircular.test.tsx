import React from 'react';
import { screen } from '@testing-library/react';
import { renderWithProviders } from '@tests/renderWithProviders';
import { ProgressCircular } from '.';

describe('ProgressCircular', () => {
  test('should render', () => {
    renderWithProviders(<ProgressCircular value={10} />);
    screen.getByTestId('cmpsr.progress-circular');
  });

  test('should render with a label', () => {
    renderWithProviders(<ProgressCircular showLabel value={50} />);
    screen.getByText('50%');
  });
});
