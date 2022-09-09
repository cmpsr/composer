import { AlertStatus, UseToastOptions as ChakraUseToastOptions } from '@chakra-ui/react';
import { AlertVariant } from '@components';

export const toastTitleAlignments = ['left', 'top'] as const;

export type ToastTitleAlignment = typeof toastTitleAlignments[number];

export interface UseToastOptions extends ChakraUseToastOptions {
  variant?: AlertVariant;
  titleAlignment?: ToastTitleAlignment;
  status?: Exclude<AlertStatus, 'loading'>;
}
