import { FC } from 'react'
import { TagProps as ChakraTagProps, TagLabelProps, TagLeftIcon, TagRightIcon } from '@chakra-ui/react';

export const TagSizes = ['s', 'm', 'l'] as const;
export type TagSize = typeof TagSizes[number];

export interface TagProps extends ChakraTagProps {
  size?: TagSize;
}

export interface TagStaticMembers {
  LeftIcon: typeof TagLeftIcon,
  RightIcon: typeof TagRightIcon,
  Label: FC<TagLabelProps>,
}