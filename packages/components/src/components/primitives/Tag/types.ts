import { TagProps as ChakraTagProps } from '@chakra-ui/react';
import { FC } from 'react';
import { IconProps } from '../Icons';

export const TagSizes = ['s', 'm', 'l'] as const;
export type TagSize = typeof TagSizes[number];

export interface TagProps extends ChakraTagProps {
  size?: TagSize;
  label: string;
  icon?: FC<IconProps>;
  iconPosition?: 'left' | 'right';
}
