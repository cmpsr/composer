import React from 'react';
import { screen, renderWithProviders, waitFor } from '@tests/renderWithProviders';
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

  test('should render the completed step progress bar as completed', async () => {
    givenComponentRendered();
    const progressBars = screen.getAllByTestId('cmpsr.progress-bar');
    const progressBar = progressBars[0].firstChild as any;
    expect(progressBar).toHaveAttribute('aria-valuenow')
    expect(progressBar.attributes['aria-valuenow'].nodeValue).toBe('100')
  });

  test('should render the progress bar at 50% when active', async () => {
    givenComponentRendered();
    const progressBars = screen.getAllByTestId('cmpsr.progress-bar');
    const progressBar = progressBars[1].firstChild as any;
    expect(progressBar).toHaveAttribute('aria-valuenow')
    expect(progressBar.attributes['aria-valuenow'].nodeValue).toBe('50')
  });

  test('render the pending progress bar at 0%', async () => {
    givenComponentRendered();
    const progressBars = screen.getAllByTestId('cmpsr.progress-bar');
    const progressBar = progressBars[2].firstChild as any;
    expect(progressBar).toHaveAttribute('aria-valuenow')
    expect(progressBar.attributes['aria-valuenow'].nodeValue).toBe('0')
  });
});
