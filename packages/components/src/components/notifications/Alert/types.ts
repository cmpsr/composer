import { AlertProps as ChakraAlertProps } from '@chakra-ui/react';

export const alertStatuses = ['success', 'warning', 'error', 'info'] as const;
export const alertTitleAlignments = ['none', 'left', 'top'] as const;
export const alertVariants = ['solid', 'subtle', 'left-accent'] as const;

export type AlertStatus = typeof alertStatuses[number];
export type AlertTitleAlignment = typeof alertTitleAlignments[number];
export type AlertStyle = typeof alertVariants[number];

export type AlertStyles = {
  icon: { status: { [key: string]: { color: string } } };
};

export interface AlertProps extends ChakraAlertProps {
  description?: string;
  status?: AlertStatus;
  titleAlignment?: AlertTitleAlignment;
  title?: string;
  variant?: AlertStyle;
  showClose?: boolean;
}
