import { TagProps as ChakraTagProps } from '@chakra-ui/react';

export const TagSizes = ['s', 'm', 'l'] as const;
export type TagSize = typeof TagSizes[number];

export interface TagProps extends ChakraTagProps {
  size?: TagSize;
}
