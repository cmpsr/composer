import React from 'react';
import { screen, renderWithProviders, fireEvent } from '@tests/renderWithProviders';
import { DateInput } from './DateInput';

describe('DateInput', () => {
  const placeholder = 'MM/DD/YYYY';
  test('should apply date mask when typing', () => {
    renderWithProviders(<DateInput placeholder={placeholder} />);
    const input = screen.getByPlaceholderText('MM/DD/YYYY') as HTMLInputElement;
    fireEvent.input(input, { target: { value: '12302020' } });
    expect(input.value).toBe('12/30/2020');
  });

  test('should display provided placeholder', () => {
    renderWithProviders(<DateInput placeholder={placeholder} />);
    screen.getByPlaceholderText(placeholder);
  });

  test('should respect passed mask options', () => {
    renderWithProviders(<DateInput placeholder={placeholder} maskOptions={{ mode: 'dd/mm/yyyy', separator: '-' }} />);
    const input = screen.getByPlaceholderText('MM/DD/YYYY') as HTMLInputElement;
    fireEvent.input(input, { target: { value: '30122020' } });
    expect(input.value).toBe('30-12-2020');
  });
});
