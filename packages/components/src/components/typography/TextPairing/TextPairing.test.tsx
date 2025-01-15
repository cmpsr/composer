import React from 'react';
import { screen, renderWithProviders } from '@tests/renderWithProviders';
import { TextPairing } from '.';

describe('TextPairing', () => {
  const label = 'Label';
  const subLabel = 'SubLabel';
  const variant = 'textpairing-header-4XL';
  const givenComponentRendered = () =>
    renderWithProviders(
      <TextPairing variant={variant}>
        <TextPairing.Label>{label}</TextPairing.Label>
        <TextPairing.SubLabel>{subLabel}</TextPairing.SubLabel>
      </TextPairing>,
    );

  test('should render label and sub label', () => {
    givenComponentRendered();
    screen.getByText(label);
    screen.getByText(subLabel);
  });
});
