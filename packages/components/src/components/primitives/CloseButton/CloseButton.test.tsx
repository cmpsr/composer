import React from 'react';
import { screen } from '@testing-library/react';
import { CloseButton } from '.';
import { renderWithProviders } from '@tests/renderWithProviders';

describe('CloseButton', () => {
  test('should render a default close button', () => {
    renderWithProviders(<CloseButton />);
    screen.getByTestId('cmpsr.closeButton');
  });
});
