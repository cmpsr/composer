import React from 'react';
import { forwardRef, Link as ChakraLink } from '@chakra-ui/react';
import { LinkProps } from './types';

export const Link = forwardRef<LinkProps, typeof ChakraLink>(
  ({ children, leadingIcon, trailingIcon, size = 'm', variant, ...props }, ref) => (
    <ChakraLink
      ref={ref}
      size={size}
      variant={variant}
      data-testid="cmpsr.link.container"
      alignItems="center"
      columnGap="0.5rem"
      {...props}
    >
      {leadingIcon}
      {children}
      {trailingIcon}
    </ChakraLink>
  )
);
