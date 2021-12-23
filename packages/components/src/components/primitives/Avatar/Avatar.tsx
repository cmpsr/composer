import React, { FC } from 'react';
import { Avatar as ChakraAvatar, AvatarBadge } from '@chakra-ui/react';
import { AvatarProps, AvatarStaticProps } from './types';

export const Avatar: FC<AvatarProps> & AvatarStaticProps = (props) => (
  <ChakraAvatar {...props}></ChakraAvatar>
);

Avatar.Badge = AvatarBadge;
