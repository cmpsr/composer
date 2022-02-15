import React, { FC } from 'react';
import { IconButton, StyleProps, useStyleConfig } from '@chakra-ui/react';
import { CloseButtonProps } from './types';
import { IconX } from '../Icons';

export const CloseButton: FC<CloseButtonProps> = ({ size, ...rest }) => {
  const styles = useStyleConfig('CloseButton', { size }) as StyleProps;
  return (
    <IconButton aria-label="close button" data-testid="cmpsr.closeButton" icon={<IconX />} __css={styles} {...rest} />
  );
};
