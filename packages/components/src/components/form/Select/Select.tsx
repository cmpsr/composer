import React from 'react';
import { forwardRef, Select as ChakraSelect } from '@chakra-ui/react';
import { SelectProps } from './types';
import { IconChevronDown } from '@components';

export const Select = forwardRef<SelectProps, typeof ChakraSelect>((props, ref) => (
  <ChakraSelect ref={ref} icon={<IconChevronDown />} {...props} />
));
