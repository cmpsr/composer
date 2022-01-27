import React, { FC, cloneElement } from 'react';
import { Link as ChakraLink, Text, Flex } from '@chakra-ui/react';

import { LinkProps } from './types';

export const Link: FC<LinkProps> = ({
  children,
  icon,
  iconPosition = 'trailing',
  size = 'm',
  ...props
}) => (
  <ChakraLink size={size} data-testid="cmpsr.link.container" {...props}>
    {icon ? (
      <Flex
        gap="spacer-1"
        alignItems="center"
        data-testid="cmpsr.flex.container"
        flexDirection={iconPosition === 'leading' ? 'row-reverse' : 'row'}
      >
        <Text isTruncated>{children}</Text>
        {cloneElement(icon, {
          size,
        })}
      </Flex>
    ) : (
      <Text isTruncated>{children}</Text>
    )}
  </ChakraLink>
);
