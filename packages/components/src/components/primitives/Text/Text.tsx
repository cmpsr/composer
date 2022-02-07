import React, { FC } from 'react';
import { Text as ChakraText } from '@chakra-ui/react';
import { TextProps } from '.';
import { useResponsiveValue } from '@hooks';

export const Text: FC<TextProps> = ({ variant, ...rest }) => {
  const responsiveVariant = useResponsiveValue(variant);
  return <ChakraText variant={responsiveVariant} {...rest} />;
};
