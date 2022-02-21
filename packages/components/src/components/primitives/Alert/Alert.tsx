import React from 'react';
import { FC } from 'react';
import { AlertProps, AlertStyles } from './types';
import {
  Alert as ChakraAlert,
  AlertDescription,
  AlertIconProps,
  AlertTitle,
  chakra,
  useMultiStyleConfig,
  useStyles,
} from '@chakra-ui/react';
import { Flex, CloseButton, IconAlertCircle, IconAlertTriangle, IconCircleCheck, IconInfoCircle } from '@components';

export const Alert: FC<AlertProps> = ({
  state,
  titleAlignment,
  variant,
  title,
  description,
  showClose = true,
  onClose,
  ...props
}) => {
  const calculateTitleAlignment = () => {
    if (titleAlignment === 'top') {
      return 'column';
    }

    return 'row';
  };

  const calculateTrailingIconAlignment = () => {
    if (titleAlignment === 'top') {
      return {
        justifyContent: 'flex-start',
        top: '0.75rem',
      };
    }

    return {
      alignItems: 'center',
      justifyContent: 'center',
      top: '0px',
    };
  };

  const {
    icon: { status },
    closeButton,
  } = useMultiStyleConfig('Alert', { variant, state }) as AlertStyles;

  return (
    <ChakraAlert status={state} variant={variant} {...props}>
      <AlertIcon data-testid="cmpsr.alert-icon" status={state || 'info'} color={status[state]?.color || 'info'} />
      <Flex data-testid="cmpsr.alert-content-wrapper" flexDir={calculateTitleAlignment()}>
        {title && titleAlignment !== 'none' && <AlertTitle data-testid="cmpsr.alert-title">{title}</AlertTitle>}
        {description && <AlertDescription>{description}</AlertDescription>}
      </Flex>
      <Flex
        position="absolute"
        right={variant === 'left-accent' ? '0.5rem' : '0.25rem'}
        height="100%"
        flexDirection="column"
        {...calculateTrailingIconAlignment()}
      >
        {showClose && <CloseButton size="s" {...closeButton} />}
      </Flex>
    </ChakraAlert>
  );
};

const STATUSES = {
  info: { icon: IconInfoCircle, colorScheme: 'blue' },
  warning: { icon: IconAlertTriangle, colorScheme: 'orange' },
  success: { icon: IconCircleCheck, colorScheme: 'green' },
  error: { icon: IconAlertCircle, colorScheme: 'red' },
};

const AlertIcon: React.FC<AlertIconProps & { status: string }> = ({ status, ...props }) => {
  const { icon: BaseIcon } = STATUSES[status];
  const styles = useStyles();

  return (
    <chakra.span display="inherit" {...props} className="chakra-alert__icon" __css={styles.icon}>
      <BaseIcon w="100%" h="100%" />
    </chakra.span>
  );
};
