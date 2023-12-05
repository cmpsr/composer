import React from 'react';
import { screen, renderWithProviders, fireEvent, waitFor } from '@tests/renderWithProviders';
import { DateInput } from './DateInput';

describe.skip('DateInput', () => {
  test('should apply date mask when typing', async () => {
    renderWithProviders(<DateInput placeholder="MM/DD/YYYY" />);
    const input = screen.getByTestId('cmpsr.input') as HTMLInputElement;
    fireEvent.change(input, { target: { value: '12251993' } });

    await waitFor(() => {
      expect(input.value).toBe('12/25/1995');
    });
  });

  test('should display provided placeholder', () => {
    const placeholder = 'MM/DD/YYYY';
    renderWithProviders(<DateInput placeholder={placeholder} />);
    screen.getByPlaceholderText(placeholder);
  });

  test('should respect passed mask options', () => {
    renderWithProviders(<DateInput maskOptions={{ mode: 'dd/mm/yyyy', separator: '-' }} />);
    const input = screen.getByPlaceholderText('MM/DD/YYYY') as HTMLInputElement;
    fireEvent.change(input, { target: { value: '25121995' } });
    expect(input.value).toBe('25-12-1995');
  });
});
