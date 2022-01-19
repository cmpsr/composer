import React, { FC } from 'react';
import { Box, Link as ChakraLink, useStyleConfig } from '@chakra-ui/react';

import { LinkProps } from './types';
import { marginSizes, linkIconSizes } from './types';

export const Link: FC<LinkProps> = ({
  children,
  icon,
  iconPosition = 'left',
  size = 'm',
  ...props
}) => {
  const { textStyle } = useStyleConfig('Link', {
    size: size,
  });

  const calculateMargin = () =>
    iconPosition === 'left'
      ? { marginRight: marginSizes[size] }
      : iconPosition === 'right'
      ? { marginLeft: marginSizes[size] }
      : {};

  const Icon: React.FC = () =>
    React.cloneElement(icon, {
      boxSize: linkIconSizes[size],
    });

  if (icon)
    return (
      <ChakraLink
        data-testid="composer-link-container"
        textStyle={textStyle as string}
        {...props}
      >
        <Box
          data-testid="composer-icon-wrapper"
          __css={{ '> svg': calculateMargin() }}
          display="flex"
          alignItems="center"
        >
          {iconPosition === 'left' && (
            <>
              <Icon data-testid="composer-cloned-icon" />
              {children}
            </>
          )}
          {iconPosition === 'right' && (
            <>
              {children}
              <Icon data-testid="composer-cloned-icon" />
            </>
          )}
        </Box>
      </ChakraLink>
    );

  return (
    <ChakraLink
      data-testid="composer-link-container"
      textStyle={textStyle as string}
      {...props}
    >
      {children}
    </ChakraLink>
  );
};
