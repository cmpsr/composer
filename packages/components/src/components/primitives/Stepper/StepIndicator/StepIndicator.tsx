import React from 'react';
import cn from 'classnames';

export const STEP_INDICATOR_DEFAULT_TEST_ID = 'stepIndicator';
export const LINE_DEFAULT_TEST_ID = 'line';

type Props = {
  className?: string;
  numberOfSteps: number;
  activeStep: number;
  testId?: string;
};

export const StepIndicator = ({
  className,
  numberOfSteps,
  activeStep,
  testId = STEP_INDICATOR_DEFAULT_TEST_ID,
}: Props) => {
  return (
    <ol
      data-testid={testId}
      className={cn(className, 'inline-flex justify-center space-x-1')}
    >
      <Indicators numberOfSteps={numberOfSteps} activeStep={activeStep} />
    </ol>
  );
};

type IndicatorsProps = {
  numberOfSteps: number;
  activeStep: number;
};

const Indicators = ({ numberOfSteps, activeStep }: IndicatorsProps) => {
  const arrOfIndicators = [];
  for (let index = 0; index < numberOfSteps; index++) {
    arrOfIndicators.push(
      <li data-testid={LINE_DEFAULT_TEST_ID} key={index}>
        <hr
          className={cn(
            'border-b-4 border-t-2 rounded w-10',
            { 'border-fill-black-200': index > activeStep },
            { 'border-fill-primary-900': index <= activeStep }
          )}
        />
      </li>
    );
  }

  return <>{arrOfIndicators}</>;
};
