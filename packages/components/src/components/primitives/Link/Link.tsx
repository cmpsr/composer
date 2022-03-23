import React from 'react';
import { forwardRef, Link as ChakraLink } from '@chakra-ui/react';
import { LinkProps } from './types';
import { IconSize } from '@components';

export const Link = forwardRef<LinkProps, typeof ChakraLink>(
  ({ children, leadingIcon: LeadingIcon, trailingIcon: TrailingIcon, size = 'm', variant, ...props }, ref) => (
    <ChakraLink
      ref={ref}
      size={size}
      variant={variant}
      data-testid="cmpsr.link.container"
      alignItems="center"
      {...props}
    >
      {LeadingIcon && <LeadingIcon size={getIconSize(size)} data-testid="cmpsr.link.leading-icon" mr="0.5rem" />}
      {children}
      {TrailingIcon && <TrailingIcon size={getIconSize(size)} data-testid="cmpsr.link.trailing-icon" ml="0.5rem" />}
    </ChakraLink>
  )
);

const getIconSize = (size: string): IconSize => (size === 'l' ? 'm' : size) as IconSize;
