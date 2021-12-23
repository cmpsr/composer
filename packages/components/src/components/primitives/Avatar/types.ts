import { FC } from 'react';
import {
  AvatarProps as ChakraAvatarProps,
  AvatarBadgeProps as ChakraAvatarBadgeProps,
} from '@chakra-ui/react';

export interface AvatarProps extends ChakraAvatarProps {}

export interface AvatarBadgeProps extends ChakraAvatarBadgeProps {}

export interface AvatarStaticProps {
  Badge: FC<AvatarBadgeProps>;
}
