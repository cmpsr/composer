import {
  Link as ChakraLink,
  IconProps,
  ResponsiveValue,
  StyleProps,
  forwardRef,
  useStyleConfig,
} from '@chakra-ui/react';
import React, { ReactElement, cloneElement, isValidElement } from 'react';
import { LinkIconProps, LinkIconSize } from './types';

export const LinkIcon = forwardRef<LinkIconProps, typeof ChakraLink>(
  ({ icon, size = 'm', variant, isInline = false, ...props }, ref) => {
    const styles = useStyleConfig('LinkIcon', { isInline, variant, size }) as StyleProps;
    const sizedIcon = getIcon(icon, size);

    return (
      <ChakraLink ref={ref} {...styles} {...props}>
        {sizedIcon}
      </ChakraLink>
    );
  },
);

const getIcon = (icon: ReactElement<IconProps>, size: ResponsiveValue<LinkIconSize>) => {
  if (!isValidElement(icon)) return null;

  return cloneElement(icon, { size } as Partial<IconProps>);
};
