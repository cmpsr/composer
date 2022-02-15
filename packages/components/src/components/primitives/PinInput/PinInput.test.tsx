import React from 'react';
import { renderWithProviders } from '@tests/renderWithProviders';
import { PinInput } from './PinInput';

describe('Pin Input', () => {
  const givenComponentRendered = () => renderWithProviders(<PinInput numOfDigits={3} />);

  test('should render input child', () => {
    const { getAllByRole } = givenComponentRendered();
    expect(getAllByRole('textbox')).toHaveLength(3);
  });
});
