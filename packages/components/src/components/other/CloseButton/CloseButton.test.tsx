import React from 'react';
import { CloseButton } from '.';
import { renderWithProviders, screen } from '@tests/renderWithProviders';

describe('CloseButton', () => {
  test('should render a default close button', () => {
    renderWithProviders(<CloseButton />);
    screen.getByTestId('cmpsr.close-button');
  });
});
