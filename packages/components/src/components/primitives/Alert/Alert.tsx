import React, { FC } from 'react';
import { AlertProps, AlertStaticMembers, AlertStyles } from './types';
import { Alert as ChakraAlert, AlertDescription, AlertTitle, useMultiStyleConfig } from '@chakra-ui/react';
import {
  CloseButton,
  IconAlertCircle,
  IconAlertTriangle,
  IconCircleCheck,
  IconInfoCircle,
  CloseButtonProps,
} from '@components';

export const Alert: FC<AlertProps> & AlertStaticMembers = ({ status = 'info', children, variant, ...props }) => {
  const { icon } = useMultiStyleConfig('Alert', { variant, status }) as AlertStyles;
  const ICONS = {
    info: IconInfoCircle,
    warning: IconAlertTriangle,
    success: IconCircleCheck,
    error: IconAlertCircle,
  };
  const BaseIcon = ICONS[status];

  return (
    <ChakraAlert status={status} variant={variant} {...props}>
      <BaseIcon data-testid="cmpsr.alert.icon" size="l" {...icon} color={icon.status[status]?.color} />
      {children}
    </ChakraAlert>
  );
};

const AlertCloseButton: FC<CloseButtonProps> = (props) => (
  <CloseButton size="s" position="absolute" top="0.75rem" right="0.5rem" {...props} />
);

Alert.Title = AlertTitle;
Alert.Description = AlertDescription;
Alert.CloseButton = AlertCloseButton;
