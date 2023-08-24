import React, { FC } from 'react';
import { PlaceholderProps } from './types';
import { Box, Text } from '@cmpsr/components';

export const Placeholder: FC<PlaceholderProps> = ({ children }) =>
  children ? (
    <Box
      overflow="hidden"
      position="absolute"
      textOverflow="ellipsis"
      top="1rem"
      left="0.75rem"
      userSelect="none"
      display="inline-block"
      pointerEvents="none"
    >
      <Text variant="text-body-meta-regular" color="text-secondary">
        {children}
      </Text>
    </Box>
  ) : null;
