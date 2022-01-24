import { BoxProps, UseToastOptions } from '@chakra-ui/react';
export interface ToastProps extends BoxProps {
  toastOptions?: UseToastOptions;
}

export const statuses = ['success', 'error', 'inform', 'warning'] as const;
export const variants = [
  'solid-toast',
  'subtle-toast',
  'left-accent-toast',
  'top-accent-toast',
] as const;
