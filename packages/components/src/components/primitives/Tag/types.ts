import { FC } from 'react';
import { StyleProps, TagLabelProps, TagLeftIcon, TagProps as ChakraTagProps } from '@chakra-ui/react';

export const tagSizes = ['s', 'm', 'l'] as const;
export type TagSize = typeof tagSizes[number];

export interface TagProps extends ChakraTagProps {
  size?: TagSize;
}

export interface TagStyle {
  container: StyleProps;
  label: StyleProps;
  leftIcon: StyleProps;
  rightIcon: StyleProps;
}

export interface TagStaticMembers {
  LeftIcon: typeof TagLeftIcon;
  RightIcon: typeof TagLeftIcon;
  Label: FC<TagLabelProps>;
}
