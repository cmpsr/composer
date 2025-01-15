import React from 'react';
import { screen, renderWithProviders } from '@tests/renderWithProviders';
import { Stepper } from './Stepper';
import { Box, Flex } from '@components';

describe('Stepper', () => {
  const givenComponentRendered = () =>
    renderWithProviders(
      <Stepper index={1}>
        {Array.from(Array(3).keys()).map((item) => (
          <Stepper.Step
            data-testid="cmpsr.stepper.step"
            key={item}
            flexDirection="column"
            _horizontal={{ alignItems: 'start' }}
          >
            <Flex width="100%" alignItems="center">
              <Stepper.Step.Indicator>
                <Stepper.Step.Status
                  complete={<Stepper.Step.Number />}
                  incomplete={<Stepper.Step.Number />}
                  active={<Stepper.Step.Number />}
                />
              </Stepper.Step.Indicator>
              <Stepper.Step.Separator />
            </Flex>
            <Box flexShrink={0} mt="0.5rem">
              <Stepper.Step.Title>Title {item + 1}</Stepper.Step.Title>
              <Stepper.Step.Description>Description {item + 1}</Stepper.Step.Description>
            </Box>
          </Stepper.Step>
        ))}
      </Stepper>,
    );

  test('should render all steps', () => {
    givenComponentRendered();
    const items = screen.getAllByTestId('cmpsr.stepper.step');
    expect(items).toHaveLength(3);
  });
});
