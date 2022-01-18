import React, { FC } from 'react';
import { Select as ChakraSelect, useMultiStyleConfig } from '@chakra-ui/react';
import { SelectProps } from './types';

export const Select: FC<SelectProps> = ({ ...props }) => {
  const styles = useMultiStyleConfig('Select', {});
  console.log(styles);
  return <ChakraSelect {...props} />;
};
