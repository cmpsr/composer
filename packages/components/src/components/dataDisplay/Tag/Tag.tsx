import React from 'react';
import {
  Tag as ChakraTag,
  TagLeftIcon,
  TagRightIcon,
  TagLabel,
  forwardRef,
  StyleProps,
  useTagStyles,
} from '@chakra-ui/react';
import { TagProps } from './types';

const Tag = forwardRef<TagProps, typeof ChakraTag>((isDisabled, ...props, ref) => (
  <ChakraTag as="div" disabled={isDisabled} ref={ref} {...props} />
));

const LeftIcon = forwardRef((props, ref) => {
  const styles = useTagStyles() as { leftIcon: StyleProps };
  return <TagLeftIcon ref={ref} {...styles.leftIcon} {...props} />;
});

const RightIcon = forwardRef((props, ref) => {
  const styles = useTagStyles() as { rightIcon: StyleProps };
  return <TagRightIcon ref={ref} {...styles.rightIcon} {...props} />;
});

const TagNamespace = Object.assign(Tag, { LeftIcon, RightIcon, Label: TagLabel });

export { TagNamespace as Tag };
