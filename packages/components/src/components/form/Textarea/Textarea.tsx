import { Textarea as ChakraTextarea, forwardRef } from '@chakra-ui/react';
import { TextareaProps } from './types';
import React from 'react';

export const Textarea = forwardRef<TextareaProps, 'textarea'>((props, ref) => {
  return <ChakraTextarea {...props} ref={ref} />;
});
