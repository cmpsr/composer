import React from 'react';
import '@testing-library/jest-dom';
import { renderWithProviders } from 'tests/renderWithProviders';
import { screen } from '@testing-library/react';
import { CloseButton } from '.';

describe('CloseButton', () => {
  test('should render a default close button', () => {
    renderWithProviders(<CloseButton />);
    expect(screen.getByTestId('cmpsr.closeButton')).toBeInTheDocument();
  });
});
