import React, { FC } from 'react';
import { Box, useToast } from '@chakra-ui/react';

import { ToastProps } from './types';
import { getAlertChakraStatus } from 'utils';

export const ToastWrapper: FC<ToastProps> = ({ toastOptions, ...props }) => {
  const toast = useToast();
  const { status, ...rest } = toastOptions;

  return (
    <Box
      data-testid="cmpsr.toast.box-wrapper"
      onClick={() => toast({ status: getAlertChakraStatus(status), ...rest })}
      {...props}
    />
  );
};
