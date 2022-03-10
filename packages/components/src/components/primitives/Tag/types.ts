import { TagProps as ChakraTagProps } from '@chakra-ui/react';

export const tagSizes = ['s', 'm', 'l'] as const;

export type TagSize = typeof tagSizes[number];

export interface TagProps extends Omit<ChakraTagProps, 'variant'> {
  size?: TagSize;
}
