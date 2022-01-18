import React from 'react';
import { screen } from '@testing-library/react';
import { renderWithProviders } from 'tests/renderWithProviders';
import { CircularProgress } from '.';

describe('CircularProgress', () => {
  test('should render', () => {
    renderWithProviders(<CircularProgress value={10} />);
    screen.getByTestId('cmpsr.circular-progress');
  });

  test('should render with a label', () => {
    renderWithProviders(<CircularProgress showLabel value={50} />);
    screen.getByText('50%');
  });
});
