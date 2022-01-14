import React from 'react';
import { FC } from 'react';
import { AlertProps, AlertStyles } from './types';
import {
  Alert as ChakraAlert,
  AlertDescription,
  AlertIconProps,
  AlertTitle,
  Box,
  chakra,
  CloseButton,
  useMultiStyleConfig,
  useStyles,
} from '@chakra-ui/react';
import { IconAlertCircle, IconAlertTriangle, IconCircleCheck, IconInfoCircle } from '../Icons';

export const Alert: FC<AlertProps> = ({
  state,
  titleAlignment,
  variant,
  title,
  description,
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
    icon: { status },
  } = useMultiStyleConfig('Alert', { variant, state }) as AlertStyles;

  return (
    <ChakraAlert status={state} variant={variant} {...props}>
      <AlertIcon
        data-testid="cmpsr.alert-icon"
        status={state || 'info'}
        color={status[state]?.color || 'info'}
      />
      <Box data-testid="cmpsr.alert-content-wrapper" display="flex" flexDir={calculateTitleAlignment()}>
        {title && titleAlignment !== 'none' && <AlertTitle data-testid="cmpsr.alert-title">{title}</AlertTitle>}
        {description && <AlertDescription>{description}</AlertDescription>}
      </Box>
      <Box
        position="absolute"
        right="8px"
        height="100%"
        display="flex"
        flexDirection="column"
        {...calculateTrailingIconAlignment()}
      >
        <CloseButton />
      </Box>
    </ChakraAlert>
  );
};

const STATUSES = {
  info: { icon: IconInfoCircle, colorScheme: "blue" },
  warning: { icon: IconAlertTriangle, colorScheme: "orange" },
  success: { icon: IconCircleCheck, colorScheme: "green" },
  error: { icon: IconAlertCircle, colorScheme: "red" },
}

const AlertIcon: React.FC<AlertIconProps & { status: string }> = ({ status, ...props}) => {
  const { icon: BaseIcon } = STATUSES[status]
  const styles = useStyles()

  return (
    <chakra.span
      display="inherit"
      {...props}
      className="chakra-alert__icon"
      __css={styles.icon}
    >
      <BaseIcon w="100%" h="100%" />
    </chakra.span>
  )
}