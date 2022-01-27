import React, { FC } from 'react';
<<<<<<< HEAD
import { Box, Link as ChakraLink, Text } from '@chakra-ui/react';
=======
import {
  Box,
  Link as ChakraLink,
  Text,
  Flex,
  FlexboxProps,
} from '@chakra-ui/react';
>>>>>>> 65110b0c59143abd8cb4f173f087c95356597fb7

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

<<<<<<< HEAD
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
=======
  const flexDirection = {
    trailing: 'row-reverse',
    leading: 'row',
  }[iconPosition] as FlexboxProps['flexDirection'];

  if (icon)
    return (
      <ChakraLink size={size} data-testid="cmpsr.link.container" {...props}>
        <Flex
          gap="spacer-1"
          alignItems="center"
          data-testid="cmpsr.flex.container"
          flexDirection={flexDirection}
        >
          <Text isTruncated>{children}</Text>
          <Icon />
        </Flex>
>>>>>>> 65110b0c59143abd8cb4f173f087c95356597fb7
      </ChakraLink>
    );

  return (
<<<<<<< HEAD
    <ChakraLink size={size} data-testid="composer-link-container" {...props}>
=======
    <ChakraLink size={size} data-testid="cmpsr.link.container" {...props}>
>>>>>>> 65110b0c59143abd8cb4f173f087c95356597fb7
      <Text isTruncated>{children}</Text>
    </ChakraLink>
  );
};
