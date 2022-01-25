import React, { FC } from 'react';
import { Box, useToast } from '@chakra-ui/react';

import { ToastProps } from './types';

export const ToastWrapper: FC<ToastProps> = ({
  children,
  toastOptions,
  as,
}) => {
  const toast = useToast();
  const { status, ...rest } = toastOptions;

  return (
    <Box
      data-testid="composer-toast-box-wrapper"
      as={as}
      onClick={() =>
        toast({ status: status === 'inform' ? 'info' : status, ...rest })
      }
    >
      {children}
    </Box>
  );
};
