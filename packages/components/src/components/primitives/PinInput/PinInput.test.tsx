import React from 'react';
import { renderWithProviders, screen } from '@tests/renderWithProviders';
import { PinInput } from './PinInput';

describe('Pin Input', () => {
  test('should render child for each digit', () => {
    renderWithProviders(<PinInput numOfDigits={3} />);
    expect(screen.getAllByRole('textbox')).toHaveLength(3);
  });
});
