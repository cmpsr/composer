import { ImageProps as ChakraImageProps, ResponsiveValue } from '@chakra-ui/react';

export interface ImageProps extends Omit<ChakraImageProps, 'src'> {
  src?: string | ResponsiveValue<string>;
}
