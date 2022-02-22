import React from 'react';
import { useToast as useToastChakra } from '@chakra-ui/react';
import { Alert, AlertProps, Flex } from '@components';
import { UseToastOptions } from './types';

export const useToast = () => {
  const toast = useToastChakra();

  const toastDecorator = (options: UseToastOptions) => {
    const {
      position,
      duration,
      isClosable,
      id,
      onCloseComplete,
      containerStyle,
      title,
      render,
      description,
      titleAlignment = 'left',
      ...alertOptions
    } = options;
    const isTitleLeftAligned = titleAlignment === 'left';
    return toast({
      render: render
        ? render
        : ({ onClose }) => (
            <Alert {...(alertOptions as AlertProps)}>
              <Flex direction={isTitleLeftAligned ? 'row' : 'column'}>
                {title && <Alert.Title {...{ ...(isTitleLeftAligned && { mr: '0.75rem' }) }}>{title}</Alert.Title>}
                {description && <Alert.Description>{description}</Alert.Description>}
                {isClosable && (
                  <Alert.CloseButton
                    onClick={onClose}
                    color={alertOptions.variant === 'solid' ? 'text-light' : 'text-primary'}
                  />
                )}
              </Flex>
            </Alert>
          ),
      position,
      duration,
      id,
      onCloseComplete,
      containerStyle,
      ...options,
    });
  };

  return Object.assign(toastDecorator, toast);
};
