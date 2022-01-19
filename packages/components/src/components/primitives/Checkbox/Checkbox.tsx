import React, { FC } from 'react';
import { Checkbox as ChakraCheckbox } from '@chakra-ui/react';
import { CheckboxProps } from './types';

export const Checkbox: FC<CheckboxProps> = (props) => {
  return <ChakraCheckbox {...props} />;
};
