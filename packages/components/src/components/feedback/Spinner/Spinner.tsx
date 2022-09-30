import React, { FC } from 'react';
import { Spinner as ChakraSpinner } from '@chakra-ui/react';
import { SpinnerProps } from './types';

export const Spinner: FC<SpinnerProps> = (props) => (
  <ChakraSpinner {...props} />
);
