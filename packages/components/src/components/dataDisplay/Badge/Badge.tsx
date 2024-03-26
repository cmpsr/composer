import React, { FC } from 'react';
import { Badge as ChakraBadge, IconProps } from '@chakra-ui/react';

import { BadgeProps } from './types';

export const Badge: FC<BadgeProps> = ({ leadingIcon, trailingIcon, children, ...props }) => {
  const leftIcon = getIcon(leadingIcon);
  const rightIcon = getIcon(trailingIcon);
  return (
    <ChakraBadge display="inline-flex" alignItems="center" gap="spacer-1" {...props}>
      {leftIcon}
      {children}
      {rightIcon}
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
