import React, { FC } from 'react';
import { CloseButton as ChakraCloseButton } from '@chakra-ui/react';
import { IconX } from '@components';
import { CloseButtonProps } from './types';

export const CloseButton: FC<CloseButtonProps> = ({ size, ...rest }) => {
  return (
    <ChakraCloseButton data-testid="cmpsr.close-button" size={size} {...rest}>
      <IconX size={size === 's' ? size : 'l'} />
    </ChakraCloseButton>
  );
};
