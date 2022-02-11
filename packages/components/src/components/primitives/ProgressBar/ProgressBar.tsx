import React, { FC } from 'react';
import { Progress as ChakraProgressBar } from '@chakra-ui/react';
import { ProgressBarProps } from './types';

export const ProgressBar: FC<ProgressBarProps> = (props) => (
  <ChakraProgressBar data-testid="cmpsr.progress-bar" {...props} />
);
