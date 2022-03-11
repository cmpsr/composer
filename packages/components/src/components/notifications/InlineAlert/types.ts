import { FlexProps, StyleProps } from '@chakra-ui/react';
import { AlertStatus } from '@components/notifications';

export interface InlineAlertProps {
  showIcon?: boolean;
  status?: AlertStatus;
  message: string;
}

export type InlineAlertStyles = {
  container: FlexProps;
  message: StyleProps;
  icon: { color: string };
};
