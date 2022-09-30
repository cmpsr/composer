import React, { FC } from 'react';
import { Radio as ChakraRadio } from '@chakra-ui/react';
import { RadioProps } from './types';

export const Radio: FC<RadioProps> = (props) => <ChakraRadio {...props} />;
