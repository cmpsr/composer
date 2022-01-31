import React, { FC } from 'react';
import { IconButton as ChakraIconButton, useMultiStyleConfig } from '@chakra-ui/react';
import { IconButtonProps } from './types';

export const IconButton: FC<IconButtonProps> = ({ ...props }) => {
  const { icon, ...iconButtonStyles } = useMultiStyleConfig('IconButton', { round: props.round, size: props.size }) as {
    borderRadius: string;
    icon: { width: string; height: string };
  };

  const Icon = React.cloneElement(props.icon, { ...icon, 'data-testid': 'cmpsr.icon.button.icon' });

  return <ChakraIconButton {...iconButtonStyles} {...props} icon={Icon} data-testid="cmpsr.icon.button" />;
};
