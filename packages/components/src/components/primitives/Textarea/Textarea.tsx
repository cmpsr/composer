import React, { FC } from 'react';
import { Textarea as ChakraTextarea } from '@chakra-ui/react';
import { TextareaProps } from './types';

export const Textarea: FC<TextareaProps> = (props) => (
  <ChakraTextarea data-testid="cmpsr.textarea" {...props} />
);
