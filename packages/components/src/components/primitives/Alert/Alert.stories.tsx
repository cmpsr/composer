import React from 'react';
import { Meta } from '@storybook/react';
import { Alert } from '.';
import { StackDivider, VStack, HStack } from '@chakra-ui/layout';
import { alertStates, alertVariants, alertTitleAlignments } from './types';

export default {
  component: Alert,
  title: 'Components/Primitives/Alert',
  argTypes: {
    state: {
      options: alertStates,
      control: { type: 'select' },
    },
    titleAlignment: {
      options: alertTitleAlignments,
      control: { type: 'select' },
    },
    variant: {
      options: alertVariants,
      control: { type: 'select' },
    },
  },
} as Meta;

const AllTemplate = () => (
  <VStack divider={<StackDivider borderColor="gray.200" />} spacing={4}>
    {alertVariants.map((variant) => (
      <HStack key={variant}>
        {alertStates.map((state) => (
          <VStack key={state}>
            {alertTitleAlignments.map((titleAlignment) => (
              <Alert
                key={`${variant}-${state}-${titleAlignment}`}
                variant={variant}
                state={state}
                titleAlignment={titleAlignment}
                title="Title"
                description="This is a description"
              />
            ))}
          </VStack>
        ))}
      </HStack>
    ))}
  </VStack>
);

export const All = AllTemplate.bind({});

const Template = (args) => <Alert {...args} />;
export const Playground = Template.bind({});
Playground.args = {
  variant: 'solid',
  title: 'Composer alert!',
  description: 'This is a description.',
  state: 'success',
  titleAlignment: 'top',
  showClose: false,
};
