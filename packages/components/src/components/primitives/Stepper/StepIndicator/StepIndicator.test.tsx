import React from 'react';
import { render, screen } from '@testing-library/react';
import {
  StepIndicator,
  STEP_INDICATOR_DEFAULT_TEST_ID,
  LINE_DEFAULT_TEST_ID,
} from './StepIndicator';

describe('StepIndicator', () => {
  it('should render class', () => {
    render(
      <StepIndicator className="className" numberOfSteps={5} activeStep={1} />
    );
    const stepIndicator = screen.getByTestId(STEP_INDICATOR_DEFAULT_TEST_ID);
    expect(stepIndicator).toHaveClass('className');
  });
  it('should render number of steps', () => {
    const numberOfSteps = 5;
    render(<StepIndicator numberOfSteps={numberOfSteps} activeStep={1} />);
    const line = screen.getAllByTestId(LINE_DEFAULT_TEST_ID);
    expect(line).toHaveLength(numberOfSteps);
  });
  it('should render active steps with proper classes', () => {
    const numberOfSteps = 5;
    const activeStep = 2;
    const activeClasses = 'border-b-4 border-t-2 rounded w-10';
    render(
      <StepIndicator numberOfSteps={numberOfSteps} activeStep={activeStep} />
    );
    const lines = screen.getAllByTestId(LINE_DEFAULT_TEST_ID);
    for (let index = 0; index < numberOfSteps; index++) {
      const line = lines[index].firstChild;
      if (index <= activeStep) {
        expect(line).toHaveClass(`border-fill-primary-900 ${activeClasses}`);
      } else {
        expect(line).toHaveClass(`border-fill-black-25 ${activeClasses}`);
      }
    }
  });
});
