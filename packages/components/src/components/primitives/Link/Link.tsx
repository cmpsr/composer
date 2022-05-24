import React from 'react';
import { forwardRef, IconProps, Link as ChakraLink } from '@chakra-ui/react';
import { LinkProps } from './types';
import { IconSize } from '../Icons';

export const Link = forwardRef<LinkProps, typeof ChakraLink>(
  ({ children, leadingIcon, trailingIcon, size = 'm', variant, ...props }, ref) => {
    const leftIcon = getIcon(leadingIcon, size);
    const rightIcon = getIcon(trailingIcon, size);

    return (
      <ChakraLink
        ref={ref}
        size={size}
        variant={variant}
        data-testid="cmpsr.link.container"
        alignItems="center"
        columnGap="0.5rem"
        {...props}
      >
        {leftIcon}
        {children}
        {rightIcon}
      </ChakraLink>
    );
  }
);

const getIcon = (icon: React.ReactElement<IconProps>, size: IconSize) => {
  if (!React.isValidElement(icon)) {
    return null;
  }

  return React.cloneElement(icon, { size: getIconSize(size) } as Partial<IconProps>);
};

const getIconSize = (size: IconSize) => (size === 'l' ? 'm' : size);
