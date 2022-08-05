import React, { FC } from 'react';
import {
  Tag as ChakraTag,
  TagLeftIcon,
  TagRightIcon,
  TagLabel,
  useStyles,
  StyleProps,
  forwardRef,
  ChakraComponent,
} from '@chakra-ui/react';
import { TagProps, TagStaticMembers } from './types';
import { IconProps } from '../Icons';

export const Tag = forwardRef((props, ref) => <ChakraTag ref={ref} {...props} />) as FC<TagProps> & TagStaticMembers;

const LeftIcon = forwardRef((props, ref) => {
  const styles = useStyles() as { leftIcon: StyleProps };
  return <TagLeftIcon ref={ref} {...styles.leftIcon} {...props} />;
});

const RightIcon = forwardRef((props, ref) => {
  const styles = useStyles() as { rightIcon: StyleProps };
  return <TagRightIcon ref={ref} {...styles.rightIcon} {...props} />;
});

Tag.LeftIcon = LeftIcon as ChakraComponent<'svg', IconProps>;
Tag.RightIcon = RightIcon as ChakraComponent<'svg', IconProps>;
Tag.Label = TagLabel;
