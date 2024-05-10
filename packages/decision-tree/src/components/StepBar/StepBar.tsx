import React, { FC } from 'react';
import { type StepBarProps } from './types';
import { Stepper, Flex, Box } from '@cmpsr/components';

export const StepBar: FC<StepBarProps> = ({ steps, activeStep }) => (
  <Box px={{ base: '0', lg: 'spacer-16', xl: 'spacer-24', xxl: 'spacer-32' }} py={{ base: '0', lg: 'spacer-4' }}>
    <Stepper index={activeStep}>
      {steps.map(({ id, name }) => (
        <Stepper.Step key={id} flexDirection="column" _horizontal={{ alignItems: 'start' }}>
          <Flex width="100%" alignItems="center">
            <Stepper.Step.Indicator>
              <Stepper.Step.Status
                complete={<Stepper.Step.Number color="text-light" />}
                incomplete={<Stepper.Step.Number color="background-static" />}
                active={<Stepper.Step.Number color="primary-default" />}
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
  </Box>
);
