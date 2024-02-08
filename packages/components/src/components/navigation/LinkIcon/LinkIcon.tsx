import React from 'react';
import { forwardRef, Link as ChakraLink, useStyleConfig, StyleProps } from '@chakra-ui/react';
import { LinkIconProps } from './types';

export const LinkIcon = forwardRef<LinkIconProps, typeof ChakraLink>(
  ({ icon, size = 'm', variant, isInline = false, ...props }, ref) => {
    const styles = useStyleConfig('LinkIcon', { isInline, variant, size }) as StyleProps;

    return (
      <ChakraLink ref={ref} {...styles} {...props}>
        {icon}
      </ChakraLink>
    );
  }
);
