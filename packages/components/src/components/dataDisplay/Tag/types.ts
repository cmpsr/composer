import { TagProps as ChakraTagProps, ResponsiveValue } from '@chakra-ui/react';

export const tagSizes = ['s', 'm', 'l'] as const;

export type TagSize = (typeof tagSizes)[number];

export interface TagProps extends Omit<ChakraTagProps, 'variant'> {
  size?: ResponsiveValue<TagSize>;
  isDisabled?: boolean;
}
