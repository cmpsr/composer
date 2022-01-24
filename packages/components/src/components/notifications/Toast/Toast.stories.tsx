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
    { title: 'Error', description: 'Error description', status: 'error' },
    { title: 'Info', status: 'info' },
  ];

  return (
    <>
      <VStack>
        {variants.map((variant) => (
          <>
            <Heading>{variant.toUpperCase()}</Heading>
            <HStack>
              {toastContentVariations.map((content, index) => (
                <ToastWrapper
                  key={index}
                  toastOptions={{
                    ...content,
                    variant,
                    duration: 3000,
                  }}
                >
                  <Button>{`${variant} variant`}</Button>
                </ToastWrapper>
              ))}
            </HStack>
            <Divider mt={5} />
          </>
        ))}
      </VStack>
    </>
  );
};
export const AllTemplate = Template.bind({});
