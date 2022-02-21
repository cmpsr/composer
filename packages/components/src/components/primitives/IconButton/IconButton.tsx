import React, { FC } from 'react';
import { IconButton as ChakraIconButton, useMultiStyleConfig } from '@chakra-ui/react';
import { IconButtonProps } from './types';
import { SpinnerProps, Spinner } from '@components';

export const IconButton: FC<IconButtonProps> = ({ isRound, icon, ...props }) => {
  const { loading: iconButtonLoading, ...iconButtonStyles } = useMultiStyleConfig('IconButton', {
    isRound: isRound,
    size: props.size,
    variant: props.variant,
    isLoading: props.isLoading,
  }) as {
    borderRadius: string;
    loading: SpinnerProps;
  };

  const Icon = React.cloneElement(icon, { size: props.size });

  return (
    <ChakraIconButton
      data-testid="cmpsr.icon-button"
      spinner={props.isLoading && <Spinner data-testid="cmpsr.icon-button.spinner" {...iconButtonLoading} />}
      icon={Icon}
      {...iconButtonStyles}
      {...props}
    />
  );
};
