import React, { FC } from 'react';
import { Button as ChakraButton, useMultiStyleConfig } from '@chakra-ui/react';
import { ButtonProps } from './types';
import { Spinner } from '..';
import { SpinnerProps } from '../Spinner/types';

export const Button: FC<ButtonProps> = (props) => {
  const { loading } = useMultiStyleConfig('Button', {
    variant: props.variant,
    size: props.size,
    isLoading: props.isLoading,
  }) as { loading: SpinnerProps };

  return <ChakraButton spinner={<Spinner {...loading} />} {...props} />;
};
