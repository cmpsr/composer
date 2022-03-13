import React from 'react';
import { forwardRef, Link as ChakraLink } from '@chakra-ui/react';
import { LinkProps } from './types';
import { Flex, IconSize, Text } from '@components';

export const Link = forwardRef<LinkProps, typeof ChakraLink>(
  ({ children, leadingIcon: LeadingIcon, trailingIcon: TrailingIcon, size = 'm', variant, ...props }, ref) => (
    <ChakraLink ref={ref} size={size} variant={variant} data-testid="cmpsr.link.container" {...props}>
      <Flex direction="row" alignItems="center" columnGap="0.5rem">
        {LeadingIcon && <LeadingIcon size={getIconSize(size)} data-testid="cmpsr.link.leading-icon" />}
        <Text isTruncated>{children}</Text>
        {TrailingIcon && <TrailingIcon size={getIconSize(size)} data-testid="cmpsr.link.trailing-icon" />}
      </Flex>
    </ChakraLink>
  )
);

const getIconSize = (size: string): IconSize => (size === 'l' ? 'm' : size) as IconSize;
