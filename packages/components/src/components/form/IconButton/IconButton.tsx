import React, { FC } from 'react';
import { forwardRef, IconButton as ChakraIconButton, useMultiStyleConfig } from '@chakra-ui/react';
import { IconButtonProps, IconButtonSize, IconButtonStyle } from './types';
import { Spinner } from '@components';
import { useResponsiveValue } from '@hooks';

/**
 * @deprecated The component "IconButton" is deprecated. Please use "ButtonIcon" instead.
 */
export const IconButton: FC<IconButtonProps> = forwardRef<IconButtonProps, 'button'>(
  ({ isRound, icon, size, ...props }, ref) => {
    const responsiveSize = useResponsiveValue(size) as IconButtonSize;
    const { loading: iconButtonLoading, ...iconButtonStyles } = useMultiStyleConfig('IconButton', {
      isRound: isRound,
      size: responsiveSize,
      variant: props.variant,
      isLoading: props.isLoading,
    }) as IconButtonStyle;

    const Icon = React.cloneElement(icon, { size: responsiveSize });

    console.warn('Deprecated: The component "IconButton" is deprecated. Please use "ButtonIcon" instead.');

    return (
      <ChakraIconButton
        ref={ref}
        icon={Icon}
        spinner={<Spinner {...iconButtonLoading} />}
        size={responsiveSize}
        {...iconButtonStyles}
        {...props}
      />
    );
  },
);
