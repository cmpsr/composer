import React from 'react';
import { screen, renderWithProviders, fireEvent } from '@tests/renderWithProviders';
import { MaskInput } from './MaskInput';

describe('MaskInput', () => {
  test('should apply mask correctly', () => {
    renderWithProviders(<MaskInput maskOptions={{ mask: /^\d*$/ }} placeholder="Enter digits" />);
    const input = screen.getByPlaceholderText('Enter digits') as HTMLInputElement;
    fireEvent.input(input, { target: { value: '123abc' } });
    expect(input.value).toBe('123');
  });

  test('should apply prefix and postfix correctly', () => {
    renderWithProviders(
      <MaskInput maskOptions={{ mask: /\d*/, prefix: '$', postfix: '%' }} placeholder="Enter amount" />,
    );
    const input = screen.getByPlaceholderText('Enter amount') as HTMLInputElement;
    fireEvent.input(input, { target: { value: '50' } });
    expect(input.value).toBe('$50%');
  });

  test('should handle custom code masks', () => {
    renderWithProviders(
      <MaskInput
        maskOptions={{
          mask: [/\d/, /\d/, /\d/, '-', /\d/, /\d/, /\d/],
        }}
        placeholder="Enter value"
      />,
    );
    const input = screen.getByPlaceholderText('Enter value') as HTMLInputElement;
    fireEvent.input(input, { target: { value: '123456' } });
    expect(input.value).toBe('123-456');
  });

  test('should clear input when mask, prefix, or postfix no longer apply', () => {
    renderWithProviders(
      <MaskInput maskOptions={{ mask: /\d*/, prefix: '$', postfix: '%' }} placeholder="Enter amount" />,
    );
    const input = screen.getByPlaceholderText('Enter amount') as HTMLInputElement;
    fireEvent.input(input, { target: { value: '$1%' } });
    expect(input.value).toBe('$1%');

    fireEvent.input(input, { target: { value: '$%' } });
    expect(input.value).toBe('');
  });
});
