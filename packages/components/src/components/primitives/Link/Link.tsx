import React, { FC } from 'react';
import { Link as ChakraLink } from '@chakra-ui/react';
import { LinkProps } from './types';
import { IconSize, Text } from '..';
import { Flex } from '../../layouts';

export const Link: FC<LinkProps> = ({
  children,
  leadingIcon: LeadingIcon,
  trailingIcon: TrailingIcon,
  size = 'm',
  ...props
}) => (
  <ChakraLink size={size} data-testid="cmpsr.link.container" {...props}>
    <Flex direction="row" alignItems="center" columnGap="0.5rem">
      {LeadingIcon && <LeadingIcon size={getIconSize(size)} data-testid="cmpsr.link.leading-icon" />}
      <Text isTruncated>{children}</Text>
      {TrailingIcon && <TrailingIcon size={getIconSize(size)} data-testid="cmpsr.link.trailing-icon" />}
    </Flex>
  </ChakraLink>
);

const getIconSize = (size: string): IconSize => (size === 'l' ? 'm' : size) as IconSize;
