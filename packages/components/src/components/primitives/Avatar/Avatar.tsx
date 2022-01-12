import React, { FC } from 'react';
import {
  Avatar as ChakraAvatar,
  AvatarBadge as ChakraAvatarBadge,
  useStyleConfig,
} from '@chakra-ui/react';
import { AvatarProps, AvatarBadgeProps, AvatarBadgeStyle } from './types';

export const Avatar: FC<AvatarProps> = ({ showBadge, size, ...rest }) => (
  <ChakraAvatar size={size} {...rest}>
    {showBadge && <AvatarBadge size={size} />}
  </ChakraAvatar>
);

const AvatarBadge: FC<AvatarBadgeProps> = ({ size, ...rest }) => {
  const styles = useStyleConfig('AvatarBadge', { size }) as AvatarBadgeStyle;
  return (
    <ChakraAvatarBadge data-testid="cmpsr.avatar.badge" {...styles} {...rest} />
  );
};
