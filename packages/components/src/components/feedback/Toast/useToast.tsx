import React from 'react';
import { useToast as useToastChakra } from '@chakra-ui/react';
import { Alert, Flex } from '@components';
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
      status = 'success',
      variant = 'solid',
    } = options;
    const isTitleLeftAligned = titleAlignment === 'left';

    return toast({
      position,
      duration,
      id,
      onCloseComplete,
      containerStyle,
      render: render
        ? render
        : ({ onClose }) => (
            <Alert variant={variant} status={status}>
              <Alert.Icon />
              <Flex direction={isTitleLeftAligned ? 'row' : 'column'} {...(isClosable && { pr: '1.5rem' })}>
                {title && <Alert.Title {...{ ...(isTitleLeftAligned && { mr: '0.75rem' }) }}>{title}</Alert.Title>}
                {description && <Alert.Description>{description}</Alert.Description>}
                {isClosable && (
                  <Alert.CloseButton onClick={onClose} color={variant === 'solid' ? 'text-light' : 'text-primary'} />
                )}
              </Flex>
            </Alert>
          ),
      ...options,
    });
  };

  return Object.assign(toastDecorator, toast);
};
