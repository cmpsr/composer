import React, { FC } from 'react';
import { IconButton, useStyleConfig } from '@chakra-ui/react';
import { CloseButtonProps } from './types';
import { IconX } from '../Icons';

export const CloseButton: FC<CloseButtonProps> = (props) => {
  const styles = useStyleConfig('CloseButton', props) as CloseButtonProps;
  return (
    <IconButton
      aria-label="close button"
      data-testid="cmpsr.closeButton"
      icon={<IconX size={props.size} />}
      {...styles}
    />
  );
};
