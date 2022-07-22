import React, { FC } from 'react';
import { AlertProps, AlertStaticMembers, AlertIconStyles, AlertIconProps } from './types';
import { Alert as ChakraAlert, AlertDescription, AlertTitle, useStyles } from '@chakra-ui/react';
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

export const Alert: FC<AlertProps> & AlertStaticMembers = ({ status = 'info', children, variant, ...props }) => {
  return (
    <ChakraAlert status={status} variant={variant} {...props}>
      {React.Children.map(children, (child) => {
        if (React.isValidElement(child) && child.type === Alert.Icon) {
          return React.cloneElement(child, { status });
        } else return child;
      })}
    </ChakraAlert>
  );
};

const Icon = ({ status }: AlertIconProps) => {
  const { icon } = useStyles() as AlertIconStyles;
  const BaseIcon = ALERT_ICONS[status];

  return <BaseIcon data-testid="cmpsr.alert.icon" size="l" {...icon} color={icon.status[status]?.color} />;
};

const AlertCloseButton: FC<CloseButtonProps> = (props) => (
  <CloseButton size="s" position="absolute" top="0.75rem" right="0.5rem" {...props} />
);

Alert.Title = AlertTitle;
Alert.Description = AlertDescription;
Alert.CloseButton = AlertCloseButton;
Alert.Icon = Icon;
