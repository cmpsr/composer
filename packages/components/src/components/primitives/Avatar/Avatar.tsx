import React, { FC } from 'react';
import { Avatar as ChakraAvatar, AvatarBadge as ChakraAvatarBadge, useAvatarStyles } from '@chakra-ui/react';
import { AvatarProps, AvatarBadgeProps, AvatarBadgeStyle } from './types';

export const Avatar: FC<AvatarProps> = ({ showBadge, size, ...rest }) => (
  <ChakraAvatar size={size} {...rest}>
    {showBadge && <AvatarBadge />}
  </ChakraAvatar>
);

const AvatarBadge: FC<AvatarBadgeProps> = (props) => (
  <ChakraAvatarBadge data-testid="cmpsr.avatar.badge" {...(useAvatarStyles().badge as AvatarBadgeStyle)} {...props} />
);
