import React, { FC } from 'react';
import { forwardRef, IconButton as ChakraIconButton, useMultiStyleConfig } from '@chakra-ui/react';
import { IconButtonProps, IconButtonStyle } from './types';
import { Spinner, SpinnerVariant } from '@components';

export const IconButton: FC<IconButtonProps> = forwardRef<IconButtonProps, 'button'>(
  ({ isRound, icon, ...props }, ref) => {
    const { loading: iconButtonLoading, ...iconButtonStyles } = useMultiStyleConfig('IconButton', {
      isRound: isRound,
      size: props.size,
      variant: props.variant,
      isLoading: props.isLoading,
    }) as IconButtonStyle;

    const Icon = React.cloneElement(icon, { size: props.size });

    return (
      <ChakraIconButton
        ref={ref}
        icon={Icon}
        spinner={<Spinner {...iconButtonLoading} />}
        {...iconButtonStyles}
        {...props}
      />
    );
  }
);
