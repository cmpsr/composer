import React from 'react';
import { Meta } from '@storybook/react';
import { ToastWrapper } from './Toast';
import { Button, Divider, Heading, HStack, Flex } from '@chakra-ui/react';

import { variants, ToastOptions } from './types';

export default {
  title: 'Components/Notifications/Toast',
  component: ToastWrapper,
} as Meta;

const Template = () => {
  const toastContentVariations: ToastOptions[] = [
    { title: 'Info', status: 'inform' },
    { title: 'Error', description: 'Error description', status: 'error' },
    {
      title: 'Warning',
      description: 'Warning description',
      isClosable: true,
      status: 'warning',
    },
    {
      title: 'Success',
      description: 'Success description',
      isClosable: true,
      status: 'success',
    },
  ];

  return (
    <Flex direction="column" justifyContent="flex-start" ml="15" gap="2">
      {variants.map((variant) => (
        <>
          <Heading size="md">{variant.toUpperCase()}S</Heading>
          {toastContentVariations.map(
            ({ title, description, isClosable, status }, index) => {
              return (
                <HStack key={index}>
                  <ToastWrapper
                    toastOptions={{
                      title,
                      description,
                      isClosable,
                      status,
                      variant,
                    }}
                  >
                    <Button>
                      {status} {isClosable && 'closable '}
                      {description && 'with description '}
                    </Button>
                  </ToastWrapper>
                </HStack>
              );
            }
          )}
          <Divider mt={5} />
        </>
      ))}
    </Flex>
  );
};

export const AllTemplate = Template.bind({});
