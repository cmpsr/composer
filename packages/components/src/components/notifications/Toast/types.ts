import { BoxProps, UseToastOptions } from '@chakra-ui/react';

export const statuses = ['success', 'error', 'inform', 'warning'] as const;
export const variants = [
  'solid-toast',
  'subtle-toast',
  'left-accent-toast',
  'top-accent-toast',
] as const;

// Replacing "info" status by "inform" and adding custom variants (Alert theme file).
type Variants = typeof variants[number];
type Statuses = typeof statuses[number];
type Exclusions<T> = Pick<T, Exclude<keyof T, 'status' | 'variant'>>;

export interface ToastOptions extends Exclusions<UseToastOptions> {
  variant?: Variants;
  status?: Statuses;
}

export interface ToastProps extends BoxProps {
  toastOptions?: ToastOptions;
}
