import React, { FC } from 'react';
import { IconButton, useStyleConfig } from '@chakra-ui/react';
import { CloseButtonProps, CloseButtonStyle } from './types';
import { IconX } from '../Icons';

export const CloseButton: FC<CloseButtonProps> = (props) => {
  const { container, icon } = useStyleConfig('CloseButton', props) as CloseButtonStyle;
  return (
    <IconButton aria-label="close button" data-testid="cmpsr.closeButton" icon={<IconX {...icon} />} {...container} />
  );
};
