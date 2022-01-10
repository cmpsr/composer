import React, { FC } from 'react';
import {
  Avatar as ChakraAvatar,
  AvatarBadge as ChakraAvatarBadge,
  useStyleConfig,
} from '@chakra-ui/react';
import {
  AvatarProps,
  AvatarBadgeProps,
  AvatarStaticProps,
  AvatarBadgeStyle,
} from './types';

export const Avatar: FC<AvatarProps> & AvatarStaticProps = (props) => (
  <ChakraAvatar {...props} />
);

export const AvatarBadge: FC<AvatarBadgeProps> = ({
  children: _children, // We need this awful hack to ensure no children is rendered
  size,
  ...rest
}) => {
  const styles = useStyleConfig('AvatarBadge', { size }) as AvatarBadgeStyle;
  return <ChakraAvatarBadge {...styles} {...rest} />;
};

Avatar.Badge = AvatarBadge;
