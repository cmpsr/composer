import React from 'react';
import { forwardRef, Text as ChakraText } from '@chakra-ui/react';
import { TextProps } from '.';
import { useResponsiveValue } from '@hooks';

export const Text = forwardRef<TextProps, typeof ChakraText>(({ variant, ...rest }, ref) => {
  const responsiveVariant = useResponsiveValue(variant);
  return <ChakraText ref={ref} variant={responsiveVariant} {...(rest as TextProps)} />;
});
