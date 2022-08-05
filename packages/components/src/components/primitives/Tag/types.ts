import { FC } from 'react';
import { ChakraComponent, TagLabelProps, TagProps as ChakraTagProps } from '@chakra-ui/react';
import { IconProps } from '../Icons';

export const tagSizes = ['s', 'm', 'l'] as const;

export type TagSize = typeof tagSizes[number];

export interface TagProps extends Omit<ChakraTagProps, 'variant'> {
  size?: TagSize;
}

export interface TagStaticMembers {
  LeftIcon: ChakraComponent<'svg', IconProps>;
  RightIcon: ChakraComponent<'svg', IconProps>;
  Label: FC<TagLabelProps>;
}
