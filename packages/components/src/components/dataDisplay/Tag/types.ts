import { TagProps as ChakraTagProps, ResponsiveValue } from '@chakra-ui/react';

export const tagSizes = ['s', 'm', 'l'] as const;
export const tagVariants = ['subtle', 'outline', 'solid', 'custom'] as const;

export type TagSize = (typeof tagSizes)[number];
export type TagVariant = (typeof tagVariants)[number] | ChakraTagProps['variant'];

export interface TagProps extends ChakraTagProps {
  size?: ResponsiveValue<TagSize>;
  isDisabled?: boolean;
  variant?: TagVariant;
}
