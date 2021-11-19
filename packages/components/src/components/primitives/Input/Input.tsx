import React, { FC } from 'react';
import { InputProps, Input as ChakraInput } from '@chakra-ui/input';

export const Input: FC<InputProps> = (props) => <ChakraInput {...props} />;
