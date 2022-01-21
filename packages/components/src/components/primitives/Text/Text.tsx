import React, { FC } from 'react';
import { Text as ChakraText, useBreakpointValue } from '@chakra-ui/react';
import { TextProps } from '.';

export const Text: FC<TextProps> = ({ variant, ...rest }) => {
  const responsiveVariant = variant
    ? typeof variant === 'string'
      ? variant
      : useBreakpointValue(variant)
    : undefined;

  return <ChakraText variant={responsiveVariant} {...rest} />;
};
