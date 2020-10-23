import React from 'react';
import { render, screen } from '@testing-library/react';
import { StepIndicator } from './StepIndicator';

describe('StepIndicator', () => {
  const testId = 'stepIndicator';
  it('should render class', () => {
    render(<StepIndicator numberOfSteps={2} activeStep={0} className="foo" />);
    const stepIndicator = screen.getByTestId(testId);
    expect(stepIndicator).toHaveClass('foo');
  });
  it('should render number of steps', () => {
    const numberOfSteps = 5;
    render(<StepIndicator numberOfSteps={numberOfSteps} activeStep={1} />);
    const line = screen.getAllByTestId('line');
    expect(line).toHaveLength(numberOfSteps);
  });
  it('should render active step', () => {
    const numberOfSteps = 5;
    const activeStep = 2;
    render(
      <StepIndicator numberOfSteps={numberOfSteps} activeStep={activeStep} />
    );
    const lines = screen.getAllByTestId('line');
    for (let index = 0; index < numberOfSteps; index++) {
      const line = lines[index].firstChild;
      if (index <= activeStep) {
        expect(line).toHaveClass('active');
      } else {
        expect(line).toHaveClass('unactive');
      }
    }
  });
});
