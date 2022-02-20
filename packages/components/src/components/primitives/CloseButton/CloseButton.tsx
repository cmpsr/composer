import React, { FC } from 'react';
import { StyleProps, useStyleConfig, CloseButton as ChakraCloseButton } from '@chakra-ui/react';
import { IconX } from '@components';
import { CloseButtonProps } from './types';

export const CloseButton: FC<CloseButtonProps> = ({ size, ...rest }) => {
  const styles = useStyleConfig('CloseButton', { size }) as StyleProps;
  return (
    <ChakraCloseButton data-testid="cmpsr.closeButton" {...styles} {...rest}>
      <IconX size={size === 's' ? size : 'l'} />
    </ChakraCloseButton>
  );
};
