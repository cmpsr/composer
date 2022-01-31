import React, { FC } from 'react';
import { CloseButton as ChakraCloseButton } from '@chakra-ui/react';
import { CloseButtonProps } from './types';

export const CloseButton: FC<CloseButtonProps> = (props) => (
  <ChakraCloseButton data-testid="cmpsr.closeButton" {...props} />
);
