import React, { FC } from 'react';
import { type StepBarProps } from './types';
import { Stepper, Flex } from '@cmpsr/components';

export const StepBar: FC<StepBarProps> = ({ steps, activeStep }) => {
  return (
    <Stepper index={activeStep}>
      {steps.map(({ id, name }) => (
        <Stepper.Step key={id} flexDirection="column" _horizontal={{ alignItems: 'start' }}>
          <Flex width="100%" alignItems="center">
            <Stepper.Step.Indicator>
              <Stepper.Step.Status
                complete={<Stepper.Step.Number color="white" />}
                incomplete={<Stepper.Step.Number color="background-static" />}
                active={<Stepper.Step.Number color="background-page-02" />}
              />
            </Stepper.Step.Indicator>
            <Stepper.Step.Separator />
          </Flex>
          <Flex flexDirection="column" flexShrink={0} mt="0.5rem" gap="spacer-1">
            <Stepper.Step.Title variant="text-body-floating-label-bold">{name}</Stepper.Step.Title>
          </Flex>
        </Stepper.Step>
      ))}
    </Stepper>
  );
};
