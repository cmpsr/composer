import React, { FC } from 'react';
import { Divider as ChakraDivider } from '@chakra-ui/react';
import { DividerProps } from './types';

export const Divider: FC<DividerProps> = (props) => (
  <ChakraDivider {...props} />
);
