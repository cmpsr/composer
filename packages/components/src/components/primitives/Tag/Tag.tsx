import React, { FC } from 'react';
import {
  Tag as ChakraTag,
  TagLeftIcon,
  TagRightIcon,
  TagLabel,
  useStyleConfig,
} from '@chakra-ui/react';
import { TagProps } from './types';

export const Tag: FC<TagProps> = ({
  label,
  icon,
  iconPosition,
  size,
  ...rest
}) => {
  const {
    container,
    label: labelStyle,
    fontStyle,
    leftIcon,
    rightIcon,
  } = useStyleConfig('Tag', { size }) as any;
  return (
    <ChakraTag {...fontStyle} {...container} {...rest}>
      {icon && iconPosition !== 'right' && (
        <TagLeftIcon {...leftIcon} as={icon} />
      )}
      <TagLabel {...labelStyle}>{label}</TagLabel>
      {icon && iconPosition === 'right' && (
        <TagRightIcon {...rightIcon} as={icon} />
      )}
    </ChakraTag>
  );
};
