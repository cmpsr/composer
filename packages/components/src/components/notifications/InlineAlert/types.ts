import { FlexProps, StyleProps } from '@chakra-ui/react';
import { AlertStatus } from '@components/notifications';

export interface InlineAlertProps extends FlexProps {
  status?: AlertStatus;
}

export type InlineAlertStyles = {
  container: FlexProps;
  message: StyleProps;
  icon: { color: string };
};

export interface InlineAlertContextProps {
  status: AlertStatus;
  styles: InlineAlertStyles;
}
