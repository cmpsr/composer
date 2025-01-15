import React, { FC, PropsWithChildren } from 'react';
import { Flex, Text, ALERT_ICONS, InlineAlertContextProps } from '@components';
import { forwardRef, useMultiStyleConfig } from '@chakra-ui/react';
import { createContext } from '@chakra-ui/react-utils';
import { InlineAlertProps, InlineAlertStyles } from './types';

const [InlineAlertProvider, useInlineAlertContext] = createContext<InlineAlertContextProps>({
  name: 'InlineAlertContext',
});

const InlineAlert = forwardRef<InlineAlertProps, typeof Flex>((props, ref) => {
  const { status = 'info', children, ...rest } = props;
  const styles = useMultiStyleConfig('InlineAlert', {
    status,
  }) as InlineAlertStyles;

  return (
    <InlineAlertProvider value={{ styles, status }}>
      <Flex ref={ref} {...styles.container} {...rest}>
        {children}
      </Flex>
    </InlineAlertProvider>
  );
});

const Message: FC<PropsWithChildren> = (props) => {
  const { styles } = useInlineAlertContext();
  return <Text {...styles.message}>{props.children}</Text>;
};

const Icon = () => {
  const { status, styles } = useInlineAlertContext();
  const BaseIcon = ALERT_ICONS[status];
  return <BaseIcon {...styles.icon} data-testid="cmpsr.inline-alert.icon" />;
};

const InlineAlertNamespace = Object.assign(InlineAlert, {
  Icon,
  Message,
});
export { InlineAlertNamespace as InlineAlert };
