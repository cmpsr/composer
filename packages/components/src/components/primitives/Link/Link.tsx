import React, { FC } from 'react';
import {
  Box,
  Link as ChakraLink,
  Text,
  Flex,
  FlexboxProps,
} from '@chakra-ui/react';

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

  const flexDirection = {
    trailing: 'row',
    leading: 'row-reverse',
  }[iconPosition] as FlexboxProps['flexDirection'];

  if (icon)
    return (
      <ChakraLink size={size} data-testid="composer-link-container" {...props}>
        <Box
          gap="spacer-1"
          data-testid="composer-icon-wrapper"
          display="flex"
          alignItems="center"
        >
          <Flex data-testid="flex-icon-container" flexDirection={flexDirection}>
            <Icon data-testid="composer-cloned-icon" />
            <Text isTruncated>{children}</Text>
          </Flex>
        </Box>
      </ChakraLink>
    );

  return (
    <ChakraLink size={size} data-testid="composer-link-container" {...props}>
      <Text isTruncated>{children}</Text>
    </ChakraLink>
  );
};
