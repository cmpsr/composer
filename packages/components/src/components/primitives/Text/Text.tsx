import React, { FC } from 'react';
import { Text as ChakraText } from '@chakra-ui/react';
import { TextProps } from '.';

export const Text: FC<TextProps> = (props) => <ChakraText {...props} />;
