import React, { FC } from 'react';
import { IconButton, StyleProps, useStyleConfig } from '@chakra-ui/react';
import { CloseButtonProps } from './types';
import { IconX } from '../Icons';

export const CloseButton: FC<CloseButtonProps> = ({ size, ...rest }) => {
  const styles = useStyleConfig('CloseButton', { size }) as StyleProps;
  return (
    <IconButton
      aria-label={rest['aria-label'] || 'close button'}
      data-testid="cmpsr.closeButton"
      icon={<IconX size={size === 's' ? size : 'l'} />}
      __css={styles}
      {...rest}
    />
  );
};
