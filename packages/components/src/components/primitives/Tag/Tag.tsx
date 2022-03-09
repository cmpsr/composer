import React, { FC } from 'react';
import {
  Tag as ChakraTag,
  TagLeftIcon,
  TagRightIcon,
  TagLabel,
  useStyles,
  forwardRef,
  StyleProps,
} from '@chakra-ui/react';
import { TagProps, TagStaticMembers } from './types';

export const Tag: FC<TagProps> & TagStaticMembers = (props) => <ChakraTag {...props} />;

const LeftIcon = forwardRef((props, ref) => {
  const styles = useStyles() as { leftIcon: StyleProps };
  return <TagLeftIcon ref={ref} {...styles.leftIcon} {...props} />;
});

export const RightIcon = forwardRef((props, ref) => {
  const styles = useStyles() as { rightIcon: StyleProps };
  return <TagRightIcon ref={ref} {...styles.rightIcon} {...props} />;
});

Tag.LeftIcon = LeftIcon;
Tag.RightIcon = RightIcon;
Tag.Label = TagLabel;
