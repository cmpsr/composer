import React, { FC } from 'react';
import { IconButton as ChakraIconButton, useMultiStyleConfig } from '@chakra-ui/react';
import { IconButtonProps } from './types';
import { SpinnerProps, Spinner } from 'components/primitives/Spinner';

const iconButtonSizeToButtonSize = {
  xs: 'xs',
  s: 'sm',
  m: 'md',
  l: 'lg',
};

export const IconButton: FC<IconButtonProps> = ({ rounded, ...props }) => {
  const { icon, loading: iconButtonLoading, ...iconButtonStyles } = useMultiStyleConfig('IconButton', {
    rounded: rounded,
    size: props.size,
  }) as {
    borderRadius: string;
    icon: { width: string; height: string };
    loading: SpinnerProps;
  };

  const { loading: buttonLoading } = useMultiStyleConfig('Button', {
    variant: props.variant,
    size: iconButtonSizeToButtonSize[props.size],
  }) as {
    loading: SpinnerProps;
  };

  const Icon = React.cloneElement(props.icon, { 'data-testid': 'cmpsr.icon.button.icon', ...icon, ...props.iconProps });

  return (
    <ChakraIconButton
      data-testid="cmpsr.icon.button"
      spinner={<Spinner data-testid="cmpsr.icon.button.spinner" {...buttonLoading} {...iconButtonLoading} />}
      {...iconButtonStyles}
      {...props}
      icon={Icon}
    />
  );
};
