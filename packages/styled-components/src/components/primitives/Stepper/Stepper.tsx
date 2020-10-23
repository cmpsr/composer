import React from 'react';
import cn from 'classnames';
import { Props, StepsProps } from './Stepper.types';
import { StyledOrderedList, StyledHr, StyledListItem } from './Stepper.styled';

export const Stepper = ({
  className,
  numberOfSteps,
  activeStep,
  testId = 'stepper',
}: Props) => {
  return (
    <StyledOrderedList data-testid={testId} className={className}>
      <Steps numberOfSteps={numberOfSteps} activeStep={activeStep} />
    </StyledOrderedList>
  );
};

const Steps = ({ numberOfSteps, activeStep }: StepsProps) => {
  const stepsArray = [];
  for (let index = 0; index < numberOfSteps; index++) {
    stepsArray.push(
      <StyledListItem data-testid={'line'} key={index}>
        <StyledHr
          className={cn(
            { unactive: index > activeStep },
            { active: index <= activeStep }
          )}
        />
      </StyledListItem>
    );
  }

  return <>{stepsArray}</>;
};
