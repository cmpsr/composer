import React from 'react';
import { Text as ChakraText } from '@chakra-ui/react';
import { TextProps } from '.';

export const Text: React.FC<TextProps> = (props) => <ChakraText {...props} />;
