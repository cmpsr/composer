import React, { FC } from 'react';
import { Select as ChakraSelect } from '@chakra-ui/react';
import { SelectProps } from './types';
import { IconChevronDown } from '@components';

export const Select: FC<SelectProps> = (props) => <ChakraSelect icon={<IconChevronDown />} {...props} />;
