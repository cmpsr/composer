import React from 'react';
import { UseToastOptions, useToast as useToastChakra } from '@chakra-ui/react';
import { Alert, AlertProps } from '@components';

export const useToast = () => {
  const toast = useToastChakra();

  const toastDecorator = (options: UseToastOptions) => {
    const { position, duration, isClosable, id, onCloseComplete, containerStyle, ...alertOptions } = options;
    return toast({
      render: () => <Alert {...(alertOptions as AlertProps)} />,
      position,
      duration,
      isClosable,
      id,
      onCloseComplete,
      containerStyle,
      ...options,
    });
  };

  return Object.assign(toastDecorator, toast);
};
