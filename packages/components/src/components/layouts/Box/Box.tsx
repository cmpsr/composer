import React, { FC } from 'react';
import { Box as ChakraBox } from '@chakra-ui/react';
import { BoxProps } from './types';

export const Box: FC<BoxProps> = (props) => <ChakraBox {...props} />;
