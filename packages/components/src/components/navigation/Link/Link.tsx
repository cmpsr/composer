import React, { ReactElement, cloneElement, isValidElement } from 'react';
import {
  forwardRef,
  IconProps,
  Link as ChakraLink,
  ResponsiveValue,
  useStyleConfig,
  StyleProps,
  chakra,
} from '@chakra-ui/react';
import { LinkProps, LinkSize } from './types';
import { getIconSize } from './getIconSize';

export const Link = forwardRef<LinkProps, typeof ChakraLink>(
  (
    { children, leadingIcon, trailingIcon, size = 'm', variant, isInline = false, isDisabled = false, ...props },
    ref
  ) => {
    const styles = useStyleConfig('Link', { isInline, variant, size }) as StyleProps;
    const leftIcon = getIcon(leadingIcon, size, isInline);
    const rightIcon = getIcon(trailingIcon, size, isInline);

    return (
      <ChakraLink
        ref={ref}
        {...(isDisabled && { 'aria-disabled': 'true', tabIndex: -1, disabled: true, pointerEvents: 'none' })}
        {...styles}
        {...props}
      >
        {leftIcon}
        {children}
        {rightIcon}
      </ChakraLink>
    );
  }
);

const getIcon = (icon: ReactElement<IconProps>, size: ResponsiveValue<LinkSize>, isInline: boolean) => {
  if (!isValidElement(icon)) return null;

  const iconElement = cloneElement(icon, { size: getIconSize(size) } as Partial<IconProps>);
  return isInline ? (
    <chakra.span display="inline-flex" verticalAlign="middle" marginInline="0.25rem">
      {iconElement}
    </chakra.span>
  ) : (
    iconElement
  );
};
