import React, { useState } from 'react';
import { Meta } from '@storybook/react';
import { Stepper, useSteps } from './Stepper';
import { Box, Button, Flex, ProgressBar } from '@components';

export default {
  component: Stepper,
  title: 'Components/Navigation/Stepper',
  argTypes: {
    stepFormat: {
      options: ['number', 'icon'],
      control: { type: 'select' },
    },
  },
} as Meta;

const TopBottomLabelTemplate = ({ numberOfSteps = 3, stepFormat = 'number' }) => {
  const { activeStep, setActiveStep } = useSteps({
    index: 1,
    count: numberOfSteps,
  });

  return (
    <>
      <Stepper index={activeStep}>
        {Array.from(Array(numberOfSteps).keys()).map((item) => (
          <Stepper.Step key={item} flexDirection="column" _horizontal={{ alignItems: 'start' }}>
            <Flex width="100%" alignItems="center">
              <Stepper.Step.Indicator>
                <Stepper.Step.Status
                  complete={
                    stepFormat === 'number' ? (
                      <Stepper.Step.Number color="text-light" />
                    ) : (
                      <Stepper.Step.Icon color="text-light" />
                    )
                  }
                  incomplete={stepFormat === 'number' ? <Stepper.Step.Number color="background-static" /> : null}
                  active={stepFormat === 'number' ? <Stepper.Step.Number color="primary-default" /> : null}
                />
              </Stepper.Step.Indicator>
              <Stepper.Step.Separator />
            </Flex>
            <Flex flexDirection="column" flexShrink={0} mt="0.5rem" gap="spacer-1">
              <Stepper.Step.Title variant="text-body-floating-label-bold">Title {item + 1}</Stepper.Step.Title>
              <Stepper.Step.Description variant="text-body-floating-label-regular">
                Description {item + 1}
              </Stepper.Step.Description>
            </Flex>
          </Stepper.Step>
        ))}
      </Stepper>
      <Flex mt="1rem" gap="1rem">
        <Button onClick={() => setActiveStep(Math.max(activeStep - 1, 0))}>Previous</Button>
        <Button onClick={() => setActiveStep(Math.min(activeStep + 1, numberOfSteps))}>Next</Button>
      </Flex>
    </>
  );
};

export const TopBottomLabel = TopBottomLabelTemplate.bind({});
TopBottomLabel.args = {
  numberOfSteps: 3,
  stepFormat: 'number',
};

const SummaryTemplate = ({ numberOfSteps = 3, stepFormat = 'number' }) => {
  const { activeStep, setActiveStep } = useSteps({
    index: 1,
    count: numberOfSteps,
  });

  return (
    <>
      <Stepper index={activeStep}>
        {Array.from(Array(numberOfSteps).keys()).map((item) => (
          <Stepper.Step key={item}>
            <Stepper.Step.Indicator>
              <Stepper.Step.Status
                complete={
                  stepFormat === 'number' ? (
                    <Stepper.Step.Number color="text-light" />
                  ) : (
                    <Stepper.Step.Icon color="text-light" />
                  )
                }
                incomplete={stepFormat === 'number' ? <Stepper.Step.Number color="background-static" /> : null}
                active={stepFormat === 'number' ? <Stepper.Step.Number color="primary-default" /> : null}
              />
            </Stepper.Step.Indicator>
            <Stepper.Step.Separator />
          </Stepper.Step>
        ))}
      </Stepper>
      <Box flexShrink={0} mt="0.5rem">
        <Stepper.Step.Title variant="text-body-floating-label-regular">Title {activeStep + 1}: </Stepper.Step.Title>
        <Stepper.Step.Description variant="text-body-floating-label-bold" as="span">
          Description {activeStep + 1}
        </Stepper.Step.Description>
      </Box>
      <Flex mt="1rem" gap="1rem">
        <Button onClick={() => setActiveStep(Math.max(activeStep - 1, 0))}>Previous</Button>
        <Button onClick={() => setActiveStep(Math.min(activeStep + 1, numberOfSteps))}>Next</Button>
      </Flex>
    </>
  );
};

export const Summary = SummaryTemplate.bind({});
Summary.args = {
  numberOfSteps: 3,
  stepFormat: 'number',
};

const ProgressTemplate = ({ numberOfSteps, stepFormat }) => {
  const { activeStep, setActiveStep } = useSteps({
    index: 1,
    count: numberOfSteps,
  });
  const [currentProgress, setCurrentProgress] = useState<number>(50);

  const handlePrevious = () => {
    if (currentProgress === 0) {
      setActiveStep(Math.max(activeStep - 1, 0));
      setCurrentProgress(50);
    } else {
      setCurrentProgress(0);
    }
  };

  const handleNext = () => {
    if (currentProgress < 50) {
      setCurrentProgress(50);
    } else {
      setCurrentProgress(0);
      setActiveStep(Math.min(activeStep + 1, numberOfSteps));
    }
  };

  return (
    <>
      <Stepper index={activeStep}>
        {Array.from(Array(numberOfSteps).keys()).map((item) => (
          <Stepper.Step key={item}>
            <Stepper.Step.Indicator>
              <Stepper.Step.Status
                complete={
                  stepFormat === 'number' ? (
                    <Stepper.Step.Number color="text-light" />
                  ) : (
                    <Stepper.Step.Icon color="text-light" />
                  )
                }
                incomplete={stepFormat === 'number' ? <Stepper.Step.Number color="background-static" /> : null}
                active={stepFormat === 'number' ? <Stepper.Step.Number color="primary-default" /> : null}
              />
            </Stepper.Step.Indicator>
            <ProgressBar
              width="100%"
              height="2px"
              min={0}
              max={100}
              value={activeStep > item ? 100 : activeStep === item ? currentProgress : 0}
            />
          </Stepper.Step>
        ))}
      </Stepper>
      <Flex mt="1rem" gap="1rem">
        <Button onClick={handlePrevious}>Previous</Button>
        <Button onClick={handleNext}>Next</Button>
      </Flex>
    </>
  );
};

export const Progress = ProgressTemplate.bind({});
Progress.args = {
  numberOfSteps: 3,
  stepFormat: 'number',
};
