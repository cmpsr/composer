import React from 'react';
import { FC } from 'react';
import { AlertProps, AlertStyles } from './types';
import {
  Alert as ChakraAlert,
  AlertDescription,
  AlertIcon,
  AlertTitle,
  Box,
  CloseButton,
  useMultiStyleConfig,
} from '@chakra-ui/react';

export const Alert: FC<AlertProps> = ({
  state,
  titleAlignment,
  variant,
  title,
  description,
  ...props
}) => {
  const calculateTitleAlignment = () => {
    if (titleAlignment === 'top') {
      return 'column';
    }

    return 'row';
  };

  const calculateTrailingIconAlignment = () => {
    if (titleAlignment === 'top') {
      return {
        justifyContent: 'flex-start',
        top: '14px',
      };
    }

    return {
      alignItems: 'center',
      justifyContent: 'center',
      top: '0px',
    };
  };

  const {
    icon: { status },
  } = useMultiStyleConfig('Alert', { variant }) as AlertStyles;

  return (
    <ChakraAlert status={state} variant={variant} {...props}>
      <AlertIcon
        data-testid="alert-icon"
        color={status[state]?.color || 'info'}
      />
      <Box data-testid="alert-content-wrapper" display="flex" flexDir={calculateTitleAlignment()}>
        {title && titleAlignment !== 'none' && <AlertTitle data-testid="alert-title">{title}</AlertTitle>}
        {description && <AlertDescription>{description}</AlertDescription>}
      </Box>
      <Box
        position="absolute"
        right="8px"
        height="100%"
        display="flex"
        flexDirection="column"
        {...calculateTrailingIconAlignment()}
      >
        <CloseButton />
      </Box>
    </ChakraAlert>
  );
};
