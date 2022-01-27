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
    leftIcon,
    rightIcon,
  } = useStyleConfig('Tag', { size }) as any;
  return (
    <ChakraTag {...container} {...rest}>
      {icon && iconPosition !== 'right' && (
        <TagLeftIcon
          data-testid="cmpsr.tag.left-icon"
          {...leftIcon}
          as={icon}
        />
      )}
      <TagLabel {...labelStyle}>{label}</TagLabel>
      {icon && iconPosition === 'right' && (
        <TagRightIcon
          data-testid="cmpsr.tag.right-icon"
          {...rightIcon}
          as={icon}
        />
      )}
    </ChakraTag>
  );
};
