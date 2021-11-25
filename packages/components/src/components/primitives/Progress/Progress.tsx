import React, { FC } from 'react';
import { Progress as ChakraProgress } from '@chakra-ui/react';
import { ProgressProps } from './types';

export const Progress: FC<ProgressProps> = (props) => {
  return (
    <ChakraProgress
      {...props}
      data-testid="composer-progressbar"
    ></ChakraProgress>
  );
};
