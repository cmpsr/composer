import React from 'react';
import { Meta } from '@storybook/react';
import { Alert } from '.';
import { StackDivider, VStack, HStack } from '@chakra-ui/layout';
import { alertStatuses, alertVariants, alertTitleAlignments } from './types';

export default {
  component: Alert,
  title: 'Components/Notifications/Alert',
  argTypes: {
    status: {
      options: alertStatuses,
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
        {alertStatuses.map((status) => (
          <VStack key={status}>
            {alertTitleAlignments.map((titleAlignment) => (
              <Alert
                key={`${variant}-${status}-${titleAlignment}`}
                variant={variant}
                status={status}
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
  status: 'success',
  titleAlignment: 'top',
  showClose: false,
};
