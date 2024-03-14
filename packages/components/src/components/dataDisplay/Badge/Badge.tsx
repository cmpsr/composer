import React, { FC } from 'react';
import { Badge as ChakraBadge, IconProps } from '@chakra-ui/react';
import { Flex } from '@components';
import { BadgeProps } from './types';

export const Badge: FC<BadgeProps> = ({ leadingIcon, trailingIcon, children, ...props }) => {
  const leftIcon = getIcon(leadingIcon);
  const rightIcon = getIcon(trailingIcon);
  return (
    <ChakraBadge {...props}>
      <Flex alignItems="center" gap="spacer-1">
        {leftIcon}
        {children}
        {rightIcon}
      </Flex>
    </ChakraBadge>
  );
};

const getIcon = (icon: React.ReactElement<IconProps>) => {
  const size = 'xs';

  if (!React.isValidElement(icon)) {
    return null;
  }

  return React.cloneElement(icon, { size } as Partial<IconProps>);
};
