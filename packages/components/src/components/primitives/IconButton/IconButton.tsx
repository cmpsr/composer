import React, { FC } from 'react';
import { IconButton as ChakraIconButton, useMultiStyleConfig } from '@chakra-ui/react';
import { IconButtonProps } from './types';

export const IconButton: FC<IconButtonProps> = ({ rounded, ...props }) => {
  const { icon, ...iconButtonStyles } = useMultiStyleConfig('IconButton', { rounded: rounded, size: props.size }) as {
    borderRadius: string;
    icon: { width: string; height: string };
  };

  const Icon = React.cloneElement(props.icon, { 'data-testid': 'cmpsr.icon.button.icon', ...icon, ...props.iconProps });

  return <ChakraIconButton data-testid="cmpsr.icon.button" {...iconButtonStyles} {...props} icon={Icon} />;
};
