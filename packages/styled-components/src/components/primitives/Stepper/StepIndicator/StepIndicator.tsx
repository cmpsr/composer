import React from 'react';
import cn from 'classnames';
import { Props, IndicatorsProps } from './StepIndicator.types';
import {
  StyledOrderedList,
  StyledHr,
  StyledListItem,
} from './StepIndicator.styled';

export const StepIndicator = ({
  className,
  numberOfSteps,
  activeStep,
  testId = 'stepIndicator',
}: Props) => {
  return (
    <StyledOrderedList data-testid={testId} className={className}>
      <Indicators numberOfSteps={numberOfSteps} activeStep={activeStep} />
    </StyledOrderedList>
  );
};

const Indicators = ({ numberOfSteps, activeStep }: IndicatorsProps) => {
  const arrOfIndicators = [];
  for (let index = 0; index < numberOfSteps; index++) {
    arrOfIndicators.push(
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

  return <>{arrOfIndicators}</>;
};
