import React, { FC } from 'react';
import { Badge as ChakraBadge } from '@chakra-ui/react';
import { BadgeProps } from './types';

export const Badge: FC<BadgeProps> = (props) => <ChakraBadge {...props} />;
