import React, { FC } from 'react';
import { Link as ChakraLink } from '@chakra-ui/react';
import { LinkProps } from './types';
import { IconSize, Text } from '..';
import { Flex } from '../../layouts';

export const Link: FC<LinkProps> = ({
  children,
  leftIcon: LeftIcon,
  rightIcon: RightIcon,
  size = 'm',
  ...props
}) => (
  <ChakraLink size={size} data-testid="cmpsr.link.container" {...props}>
    <Flex direction="row" alignItems="center">
      {LeftIcon && (
        <LeftIcon size={getIconSize(size)} data-testid="cmpsr.link.left-icon" />
      )}
      <Text
        {...(LeftIcon && { ml: '0.5rem' })}
        {...(RightIcon && { mr: '0.5rem' })}
        isTruncated
      >
        {children}
      </Text>
      {RightIcon && (
        <RightIcon
          size={getIconSize(size)}
          data-testid="cmpsr.link.right-icon"
        />
      )}
    </Flex>
  </ChakraLink>
);

const getIconSize = (size: string): IconSize =>
  (size === 'l' ? 'm' : size) as IconSize;
