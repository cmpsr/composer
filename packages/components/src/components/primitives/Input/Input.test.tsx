import React from 'react';
import { screen, renderWithProviders } from 'tests/renderWithProviders';
import { Input } from './Input';

describe('Input', () => {
  const defaultValue = 'Label';
  const placeHolder = 'Place holder text';
  const variant = 'outline';
  const givenComponentRendered = () =>
    renderWithProviders(
      <Input
        defaultValue={defaultValue}
        variant={variant}
        placeholder={placeHolder}
      />
    );

  test('should render input', () => {
    givenComponentRendered();
    screen.getByPlaceholderText(placeHolder);
  });
});
