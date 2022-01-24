import React from 'react';
import { Meta } from '@storybook/react';
import { ToastWrapper } from './Toast';
import {
  Button,
  Divider,
  Heading,
  HStack,
  VStack,
  UseToastOptions,
} from '@chakra-ui/react';

import { variants } from './types';

export default {
  title: 'Components/Notifications/Toast',
  component: ToastWrapper,
} as Meta;

const Template = () => {
  const toastContentVariations: UseToastOptions[] = [
    { title: 'Info', status: 'info' },
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
    <>
      <VStack>
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
                        duration: 3000,
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
      </VStack>
    </>
  );
};
export const AllTemplate = Template.bind({});
