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
      </ChakraLink>
    );

  return (
    <ChakraLink size={size} data-testid="cmpsr.link.container" {...props}>
      <Text isTruncated>{children}</Text>
    </ChakraLink>
  );
};
