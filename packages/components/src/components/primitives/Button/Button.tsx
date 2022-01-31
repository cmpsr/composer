import React, { FC } from 'react';
import { Button as ChakraButton, useMultiStyleConfig } from '@chakra-ui/react';
import { ButtonProps } from './types';
import { Spinner } from 'components/primitives/Spinner';
import { SpinnerProps } from 'components/primitives/Spinner/types';

export const Button: FC<ButtonProps> = (props) => {
  const { loading } = useMultiStyleConfig('Button', {
    variant: props.variant,
    size: props.size,
    isLoading: props.isLoading,
  }) as { loading: SpinnerProps };

  return <ChakraButton spinner={<Spinner data-testid="cmpsr.button.spinner" {...loading} />} {...props} />;
};
