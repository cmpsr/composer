import React from 'react';
import { Image as ChakraImage } from '@chakra-ui/react';
import { useResponsiveValue } from '@hooks';
import { ImageProps } from './types';

export const Image = ({ src, ...props }: ImageProps) => {
  const source = useResponsiveValue(src);

  return <ChakraImage src={source} {...props} />;
};
