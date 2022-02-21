import React, { FC } from 'react';
import { IconButton as ChakraIconButton, useMultiStyleConfig } from '@chakra-ui/react';
import { IconButtonProps, IconButtonStyle } from './types';
import { Spinner } from '@components';

export const IconButton: FC<IconButtonProps> = ({ isRound, icon, ...props }) => {
  const { loading: iconButtonLoading, ...iconButtonStyles } = useMultiStyleConfig('IconButton', {
    isRound: isRound,
    size: props.size,
    variant: props.variant,
    isLoading: props.isLoading,
  }) as IconButtonStyle;

  const Icon = React.cloneElement(icon, { size: props.size });

  return (
    <ChakraIconButton
      data-testid="cmpsr.icon-button"
      spinner={<Spinner data-testid="cmpsr.icon-button.spinner" {...iconButtonLoading} />}
      icon={Icon}
      {...iconButtonStyles}
      {...props}
    />
  );
};
