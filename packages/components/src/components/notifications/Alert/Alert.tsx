import React from 'react';
import { FC } from 'react';
import { AlertProps, AlertStyles } from './types';
import {
  Alert as ChakraAlert,
  AlertDescription,
  AlertIconProps,
  AlertTitle,
  chakra,
  CloseButton,
  useMultiStyleConfig,
  useStyles,
} from '@chakra-ui/react';
import { Flex, IconAlertCircle, IconAlertTriangle, IconCircleCheck, IconInfoCircle } from '@components';

export const Alert: FC<AlertProps> = ({
  status,
  titleAlignment,
  variant,
  title,
  description,
  showClose = true,
  ...props
}) => {
  const calculateTrailingIconAlignment = () => {
    if (titleAlignment === 'top') {
      return {
        justifyContent: 'flex-start',
        top: '1rem',
      };
    }

    return {
      alignItems: 'center',
      justifyContent: 'center',
      top: '0px',
    };
  };

  const {
    icon: { status: iconStatus },
  } = useMultiStyleConfig('Alert', { variant, status }) as AlertStyles;

  return (
    <ChakraAlert status={status} variant={variant} {...props}>
      <AlertIcon data-testid="cmpsr.alert-icon" status={status || 'info'} color={iconStatus[status]?.color || 'info'} />
      <Flex data-testid="cmpsr.alert-content-wrapper" flexDir={titleAlignment === 'top' ? 'column' : 'row'}>
        {title && titleAlignment !== 'none' && <AlertTitle data-testid="cmpsr.alert-title">{title}</AlertTitle>}
        {description && <AlertDescription>{description}</AlertDescription>}
      </Flex>
      <Flex
        position="absolute"
        right="0.5rem"
        height="100%"
        flexDirection="column"
        {...calculateTrailingIconAlignment()}
      >
        {showClose && <CloseButton />}
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
