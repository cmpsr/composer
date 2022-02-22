import { UseToastOptions as ChakraUseToastOptions } from '@chakra-ui/react';

export const toastVariants = ['solid', 'subtle', 'left-accent', 'top-accent'] as const;
export const toastTitleAlignments = ['left', 'top'] as const;

export type ToastVariant = typeof toastVariants[number];
export type ToastTitleAlignment = typeof toastTitleAlignments[number];

export interface UseToastOptions extends ChakraUseToastOptions {
  variant?: ToastVariant;
  titleAlignment?: ToastTitleAlignment;
}
