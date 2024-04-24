import React from 'react';
import { screen, renderWithProviders } from '@tests/renderWithProviders';
import { StepBar } from './StepBar';

describe('StepBar', () => {
  const steps = [{id:1, label:'firstStep'}, {id:2, label:'secondStep'}, {id:3, label:'thirdStep'}]
  const givenComponentRendered = () =>
    renderWithProviders(
      <StepBar steps={steps} activeStep={1} />
    );

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
