import React from 'react';
import { screen, renderWithProviders } from '@tests/renderWithProviders';
import { StepBar } from './StepBar';
import { Steps } from '@types';

describe('StepBar', () => {
  const steps: Steps = [
    { id: '1', name: 'firstStep' },
    { id: '2', name: 'secondStep' },
    { id: '3', name: 'thirdStep' },
  ];
  const givenComponentRendered = () => renderWithProviders(<StepBar steps={steps} activeStep={1} />);

  test('should render the first step', () => {
    givenComponentRendered();
    const items = screen.getAllByText('firstStep');
    expect(items).toHaveLength(1);
  });

  test('should render the second step', () => {
    givenComponentRendered();
    const items = screen.getAllByText('secondStep');
    expect(items).toHaveLength(1);
  });

  test('should render the third step', () => {
    givenComponentRendered();
    const items = screen.getAllByText('thirdStep');
    expect(items).toHaveLength(1);
  });
});
