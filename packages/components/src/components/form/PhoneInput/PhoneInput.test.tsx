import React from 'react';
import { screen, renderWithProviders, fireEvent } from '@tests/renderWithProviders';
import { PhoneInput } from './PhoneInput';

describe('PhoneInput', () => {
  const placeholder = 'Enter phone number';
  test('should apply phone mask when typing', () => {
    renderWithProviders(<PhoneInput placeholder={placeholder} />);
    const input = screen.getByPlaceholderText(placeholder) as HTMLInputElement;
    fireEvent.input(input, { target: { value: '1234567890' } });
    expect(input.value).toBe('+1 234 567-890');
  });

  test('should respect passed mask options', () => {
    renderWithProviders(<PhoneInput placeholder={placeholder} maskOptions={{ countryIsoCode: 'ES' }} />);
    const input = screen.getByPlaceholderText(placeholder) as HTMLInputElement;
    fireEvent.input(input, { target: { value: '699999999' } });
    expect(input.value).toBe('+34 699 99-99-99');
  });
});
