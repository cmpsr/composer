import { BadgeProps as ChakraBadgeProps } from '@chakra-ui/react';

export const badgeVariants = ['solid', 'outline', 'subtle'] as const;
export type BadgeVariant = (typeof badgeVariants)[number];

export const badgeStatuses = [
  'custom',
  'accent',
  'primary',
  'secondary',
  'info',
  'success',
  'warning',
  'error',
] as const;
export type BadgeStatus = (typeof badgeStatuses)[number];

export interface BadgeProps extends ChakraBadgeProps {
  variant?: BadgeVariant;
  status?: BadgeStatus;
}
