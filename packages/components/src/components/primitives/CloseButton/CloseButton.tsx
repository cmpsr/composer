import React, { FC } from 'react';
import { IconButton, useStyleConfig } from '@chakra-ui/react';
import { CloseButtonProps, CloseButtonStyle } from './types';
import { IconX } from '../Icons';

export const CloseButton: FC<CloseButtonProps> = ({ size, ...rest }) => {
  const { container, icon } = useStyleConfig('CloseButton', { size }) as CloseButtonStyle;
  return (
    <IconButton
      aria-label="close button"
      data-testid="cmpsr.closeButton"
      icon={<IconX {...icon} />}
      {...container}
      {...rest}
    />
  );
};
