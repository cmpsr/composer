import React from 'react';
import { CloseButton as ChakraCloseButton, forwardRef } from '@chakra-ui/react';
import { IconX } from '@components';
import { CloseButtonProps } from './types';

export const CloseButton = forwardRef<CloseButtonProps, typeof ChakraCloseButton>(({ size, ...rest }, ref) => (
  <ChakraCloseButton ref={ref} data-testid="cmpsr.close-button" size={size} {...rest}>
    <IconX size={size === 's' ? size : 'l'} />
  </ChakraCloseButton>
));
