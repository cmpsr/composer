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
import { LinkIconProps, LinkIconSize } from './types';

export const LinkIcon = forwardRef<LinkIconProps, typeof ChakraLink>(
  ({ icon, size = 'm', variant, isInline = false, ...props }, ref) => {
    const styles = useStyleConfig('Link', { isInline, variant, size }) as StyleProps;
    const sizedIcon = getIcon(icon, size, isInline);

    return (
      <ChakraLink ref={ref} {...styles} {...props}>
        {sizedIcon}
      </ChakraLink>
    );
  }
);

const getIcon = (icon: ReactElement<IconProps>, size: ResponsiveValue<LinkIconSize>, isInline: boolean) => {
  if (!isValidElement(icon)) return null;

  const iconElement = cloneElement(icon, { size } as Partial<IconProps>);
  return isInline ? (
    <chakra.span display="inline-flex" verticalAlign="middle" marginInline="0.25rem">
      {iconElement}
    </chakra.span>
  ) : (
    iconElement
  );
};
