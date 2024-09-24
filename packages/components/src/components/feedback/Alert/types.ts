import { FC } from 'react';
import { AlertDescriptionProps, AlertProps as ChakraAlertProps, AlertTitleProps } from '@chakra-ui/react';
import { CloseButtonProps } from '@components';

export const alertStatuses = ['success', 'warning', 'error', 'info'] as const;
export const alertVariants = ['solid', 'subtle', 'left-accent', 'outlined'] as const;

export type AlertStatus = (typeof alertStatuses)[number];
export type AlertVariant = (typeof alertVariants)[number];

export type AlertStyles = {
  icon: { status: { [key: string]: { color: string } } };
};

export interface AlertStaticMembers {
  Title: FC<AlertTitleProps>;
  Description: FC<AlertDescriptionProps>;
  CloseButton: FC<CloseButtonProps>;
  Icon: FC<AlertIconProps>;
}

export interface AlertProps extends ChakraAlertProps {
  status?: AlertStatus;
  variant?: AlertVariant;
}

export type AlertIconProps = {};
