import React, { FC } from 'react';
import { Box, Link as ChakraLink, Text } from '@chakra-ui/react';

import { LinkProps } from './types';

export const Link: FC<LinkProps> = ({
  children,
  icon,
  iconPosition = 'trailing',
  size = 'm',
  ...props
}) => {
  const Icon: React.FC = () =>
    React.cloneElement(icon, {
      size,
    });

  if (icon)
    return (
      <ChakraLink size={size} data-testid="composer-link-container" {...props}>
        <Box
          gap="spacer-1"
          data-testid="composer-icon-wrapper"
          display="flex"
          alignItems="center"
        >
          {iconPosition === 'trailing' && (
            <>
              <Icon data-testid="composer-cloned-icon" />
              <Text isTruncated>{children}</Text>
            </>
          )}
          {iconPosition === 'leading' && (
            <>
              <Text isTruncated>{children}</Text>
              <Icon data-testid="composer-cloned-icon" />
            </>
          )}
        </Box>
      </ChakraLink>
    );

  return (
    <ChakraLink size={size} data-testid="composer-link-container" {...props}>
      <Text isTruncated>{children}</Text>
    </ChakraLink>
  );
};
