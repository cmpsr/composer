import React, { FC } from 'react';
import { type StepBarProps } from './types';
import { Stepper, Flex, Box, ProgressBar } from '@cmpsr/components';

export const StepBar: FC<StepBarProps> = ({ steps, activeStep }) => (
  <Box px={{ base: '0', lg: 'spacer-16', xl: 'spacer-24', xxl: 'spacer-32' }} py={{ base: '0', lg: 'spacer-4' }}>
    <Stepper index={activeStep} display={{ base: 'none', lg: 'flex' }}>
      {steps.map(({ id, name }, index) => (
        <Stepper.Step key={id} flexDirection="column" _horizontal={{ alignItems: 'start' }}>
          <Flex width="100%" alignItems="center">
            <Stepper.Step.Indicator>
              <Stepper.Step.Status
                complete={<Stepper.Step.Icon />}
                incomplete={<Stepper.Step.Number />}
                active={<Stepper.Step.Number />}
              />
            </Stepper.Step.Indicator>
            <ProgressBar
              width="100%"
              height="2px"
              min={0}
              max={100}
              value={activeStep > index ? 100 : activeStep === index ? 50 : 0}
            />
          </Flex>
          <Flex flexDirection="column" flexShrink={0} mt="0.5rem" gap="spacer-1">
            <Stepper.Step.Title variant="text-body-floating-label-bold">{name}</Stepper.Step.Title>
          </Flex>
        </Stepper.Step>
      ))}
    </Stepper>
    <Stepper index={activeStep} display={{ base: 'flex', lg: 'none' }}>
      <ProgressBar width="100%" height="8px" min={0} max={100} value={activeStep / steps.length} />
    </Stepper>
  </Box>
);
