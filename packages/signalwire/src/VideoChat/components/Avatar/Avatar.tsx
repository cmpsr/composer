import { Avatar as CmpsrAvatar, AvatarProps } from '@cmpsr/components';
import React from 'react';

export const Avatar: React.FC<AvatarProps> = ({ name, size = 'l' }) => (
  <CmpsrAvatar size={size} name={name} getInitials={(name) => name.substring(0, 2).toUpperCase()} />
);
