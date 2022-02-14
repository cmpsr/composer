import { AlertProps as ChakraAlertProps, StyleProps } from '@chakra-ui/react';

export const alertStates = ['success', 'warning', 'error', 'info'] as const;
export const alertTitleAlignments = ['none', 'left', 'top'] as const;
export const alertVariants = ['solid', 'subtle', 'left-accent'] as const;

export type AlertState = typeof alertStates[number];
export type AlertTitleAlignment = typeof alertTitleAlignments[number];
export type AlertStyle = typeof alertVariants[number];

export type AlertStyles = {
  icon: { status: { [key: string]: { color: string } } };
  closeButton: StyleProps;
};

export interface AlertProps extends ChakraAlertProps {
  description?: string;
  state?: AlertState;
  titleAlignment?: AlertTitleAlignment;
  title?: string;
  variant?: AlertStyle;
  showClose?: boolean;
  onClose?: () => void;
}
