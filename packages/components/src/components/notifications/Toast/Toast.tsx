import React, { FC } from 'react';
import { Box, useToast } from '@chakra-ui/react';

import { ToastProps } from './types';

export const ToastWrapper: FC<ToastProps> = ({
  children,
  toastOptions,
  as,
}) => {
  const toast = useToast();
  return (
    <Box as={as} onClick={() => toast({ ...toastOptions })}>
      {children}
    </Box>
  );
};
