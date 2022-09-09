import React, { FC } from 'react';
import { AlertProps, AlertStaticMembers, AlertStyles, AlertStatus } from './types';
import { Alert as ChakraAlert, AlertDescription, AlertTitle, useAlertStyles } from '@chakra-ui/react';
import { createContext } from '@chakra-ui/react-utils';
import {
  CloseButton,
  IconAlertCircle,
  IconAlertTriangle,
  IconCircleCheck,
  IconInfoCircle,
  CloseButtonProps,
} from '@components';

export const ALERT_ICONS = {
  info: IconInfoCircle,
  warning: IconAlertTriangle,
  success: IconCircleCheck,
  error: IconAlertCircle,
};

interface AlertContext {
  status: AlertStatus;
}

const [AlertProvider, useAlertContext] = createContext<AlertContext>({
  name: 'AlertContext',
  errorMessage: 'useAlertContext: `context` is undefined. Seems you forgot to wrap alert components in `<Alert />`',
});

export const Alert: FC<AlertProps> & AlertStaticMembers = ({ status = 'info', ...props }) => {
  return (
    <AlertProvider value={{ status }}>
      <ChakraAlert status={status} {...props} />
    </AlertProvider>
  );
};

const AlertIcon = () => {
  const { icon } = useAlertStyles() as AlertStyles;
  const { status } = useAlertContext();
  const BaseIcon = ALERT_ICONS[status];

  return <BaseIcon data-testid="cmpsr.alert.icon" size="l" {...icon} color={icon.status[status]?.color} />;
};

const AlertCloseButton: FC<CloseButtonProps> = (props) => (
  <CloseButton size="s" position="absolute" top="0.75rem" right="0.5rem" {...props} />
);

Alert.Title = AlertTitle;
Alert.Description = AlertDescription;
Alert.CloseButton = AlertCloseButton;
Alert.Icon = AlertIcon;
