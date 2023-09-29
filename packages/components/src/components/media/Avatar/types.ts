import {
  AvatarProps as ChakraAvatarProps,
  AvatarBadgeProps as ChakraAvatarBadgeProps,
  StyleProps,
  ResponsiveValue,
} from '@chakra-ui/react';

export const avatarSizes = ['xs', 's', 'm', 'l', 'xl', 'xxl'] as const;
export type AvatarSize = (typeof avatarSizes)[number];

export interface AvatarProps extends ChakraAvatarProps {
  size?: ResponsiveValue<AvatarSize>;
  showBadge?: boolean;
}

export type AvatarBadgeProps = Omit<ChakraAvatarBadgeProps, 'children'>;

export type AvatarBadgeStyle = StyleProps;
