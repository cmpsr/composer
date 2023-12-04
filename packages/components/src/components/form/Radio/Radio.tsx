import React from 'react';
import { Radio as ChakraRadio, forwardRef } from '@chakra-ui/react';
import { RadioProps } from './types';

export const Radio = forwardRef<RadioProps, typeof ChakraRadio>((props, ref) => <ChakraRadio ref={ref} {...props} />);
