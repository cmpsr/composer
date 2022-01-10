import { FC } from 'react';
import {
  AvatarProps as ChakraAvatarProps,
  AvatarBadgeProps as ChakraAvatarBadgeProps,
  StyleProps,
} from '@chakra-ui/react';

export const avatarSizes = ['xs', 's', 'm', 'l', 'xl', 'xxl'] as const;
export type AvatarSize = typeof avatarSizes[number];

export interface AvatarProps extends ChakraAvatarProps {
  size?: AvatarSize;
}

export type AvatarBadgeProps = Omit<ChakraAvatarBadgeProps, 'children'> & {
  size?: AvatarSize;
};

export interface AvatarStaticProps {
  Badge: FC<AvatarBadgeProps>;
}

export type AvatarBadgeStyle = StyleProps;
