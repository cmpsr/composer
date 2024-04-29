import React, { FC } from 'react';
import { forwardRef, IconButton as ChakraButtonIcon, useMultiStyleConfig } from '@chakra-ui/react';
import { ButtonIconProps, ButtonIconSize, ButtonIconStyle } from './types';
import { Spinner } from '@components';
import { useResponsiveValue } from '@hooks';

export const ButtonIcon: FC<ButtonIconProps> = forwardRef<ButtonIconProps, 'button'>(
  ({ isRound, icon, size, ...props }, ref) => {
    const responsiveSize = useResponsiveValue(size) as ButtonIconSize;
    const { loading: buttonIconLoading, ...buttonIconStyles } = useMultiStyleConfig('ButtonIcon', {
      isRound: isRound,
      size: responsiveSize,
      variant: props.variant,
      isLoading: props.isLoading,
    }) as ButtonIconStyle;

    const Icon = React.cloneElement(icon, { size: responsiveSize, display: 'block' });

    return (
      <ChakraButtonIcon
        ref={ref}
        icon={Icon}
        spinner={<Spinner {...buttonIconLoading} />}
        size={responsiveSize}
        {...buttonIconStyles}
        {...props}
      />
    );
  }
);
