import React, { FC } from 'react';
import { Link as ChakraLink, Text, Flex } from '@chakra-ui/react';

import { LinkProps } from './types';

export const Link: FC<LinkProps> = ({
  children,
  icon: Icon,
  iconPosition = 'trailing',
  size = 'm',
  ...props
}) => (
  <ChakraLink size={size} data-testid="cmpsr.link.container" {...props}>
    {Icon ? (
      <Flex
        gap="spacer-1"
        alignItems="center"
        data-testid="cmpsr.flex.container"
        flexDirection={iconPosition === 'leading' ? 'row-reverse' : 'row'}
      >
        <Text isTruncated>{children}</Text>
        <Icon size={size} />
      </Flex>
    ) : (
      <Text isTruncated>{children}</Text>
    )}
  </ChakraLink>
);
