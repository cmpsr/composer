import React from 'react';
import '@testing-library/jest-dom';
import { screen, renderWithProviders } from '@tests/renderWithProviders';
import { NumberInput } from '.';

describe('NumberInput', () => {
  test('it should render', () => {
    renderWithProviders(
      <NumberInput data-testid="cmpsr.number-input">
        <NumberInput.Field data-testid="cmpsr.number-input.field" />
        <NumberInput.Stepper data-testid="cmpsr.number-input.stepper-group">
          <NumberInput.IncrementStepper data-testid="cmpsr.number-input.increment-stepper" />
          <NumberInput.DecrementStepper data-testid="cmpsr.number-input.decrement-stepper" />
        </NumberInput.Stepper>
      </NumberInput>,
    );

    expect(screen.queryByTestId('cmpsr.number-input')).toBeInTheDocument();
    expect(screen.queryByTestId('cmpsr.number-input.field')).toBeInTheDocument();
    expect(screen.queryByTestId('cmpsr.number-input.stepper-group')).toBeInTheDocument();
    expect(screen.queryByTestId('cmpsr.number-input.increment-stepper')).toBeInTheDocument();
    expect(screen.queryByTestId('cmpsr.number-input.decrement-stepper')).toBeInTheDocument();
  });
});
