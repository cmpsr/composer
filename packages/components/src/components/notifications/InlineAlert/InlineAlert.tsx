import React from 'react';
import { Flex, Text, ALERT_ICONS } from '@components';
import { FlexProps, forwardRef, useMultiStyleConfig } from '@chakra-ui/react';
import { InlineAlertProps, InlineAlertStyles } from './types';

export const InlineAlert = forwardRef<InlineAlertProps & FlexProps, typeof Flex>((props, ref) => {
  const { status = 'info', showIcon, message, ...rest } = props;
  const styles = useMultiStyleConfig('InlineAlert', {
    status,
  }) as InlineAlertStyles;

  const BaseIcon = ALERT_ICONS[status];

  return (
    <Flex ref={ref} {...styles.container} {...rest}>
      {showIcon && <BaseIcon {...styles.icon} data-testid="cmpsr.inline-alert.icon" />}
      <Text {...styles.message}>{message}</Text>
    </Flex>
  );
});
