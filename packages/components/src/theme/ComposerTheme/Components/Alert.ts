import { ComponentStyleConfig } from '@chakra-ui/react';
import { alertAnatomy as parts } from '@chakra-ui/anatomy';
import { PartsStyleFunction } from '@chakra-ui/theme-tools';

const containerStatusesColors = {
  success: {
    backgroundColor: 'background-success',
    borderStartColor: 'alert-success-default',
  },
  error: {
    backgroundColor: 'background-error',
    borderStartColor: 'alert-error-default',
  },
  warning: {
    backgroundColor: 'background-warning',
    borderStartColor: 'alert-warning-default',
  },
  info: {
    backgroundColor: 'background-inform',
    borderStartColor: 'alert-inform-default',
  },
};

const containerVariantsColors = {
  solid: {
    success: {
      backgroundColor: 'alert-success-default',
    },
    error: {
      backgroundColor: 'alert-error-default',
    },
    warning: {
      backgroundColor: 'alert-warning-default',
    },
    info: {
      backgroundColor: 'alert-inform-default',
    },
  },
  subtle: containerStatusesColors,
  'left-accent': containerStatusesColors,
  outline: {
    success: {
      borderColor: 'alert-success-default',
      borderWidth: '1px',
      backgroundColor: 'background-success',
    },
    error: {
      borderColor: 'alert-error-default',
      borderWidth: '1px',
      backgroundColor: 'background-error',
    },
    warning: {
      borderColor: 'alert-warning-default',
      borderWidth: '1px',
      backgroundColor: 'background-warning',
    },
    info: {
      borderColor: 'alert-inform-default',
      borderWidth: '1px',
      backgroundColor: 'background-inform',
    },
  },
};

const variantSolid: PartsStyleFunction<typeof parts> = (props) => {
  const { status, variant } = props;

  return {
    container: {
      ...containerVariantsColors[variant]?.[status],
    },
    title: {
      color: 'text-light',
    },
    description: {
      color: 'text-light',
    },
    icon: {
      color: 'text-light',
    },
  };
};

const variantOutline: PartsStyleFunction<typeof parts> = (props) => {
  const { status } = props;

  return {
    container: {
      ...containerVariantsColors['outline']?.[status],
      borderRadius: '12px',
    },
    title: {
      color: containerStatusesColors[status]?.borderStartColor,
    },
    description: {
      color: containerStatusesColors[status]?.borderStartColor,
    },
    icon: {
      color: containerStatusesColors[status]?.color,
    },
  };
};

const generateVariantByStatus: PartsStyleFunction<typeof parts> = (props) => {
  const { status, variant } = props;

  return {
    container: {
      ...containerVariantsColors[variant]?.[status],
      ...(variant === 'left-accent' && { pr: '0.5rem' }),
    },
  };
};

export const Alert: ComponentStyleConfig = {
  parts: parts.keys,
  baseStyle: {
    container: {
      borderRadius: '0.375rem',
      py: '0.75rem',
      px: '1rem',
    },
    icon: {
      alignSelf: 'flex-start',
      marginInlineEnd: '0.625rem',
    },
    title: {
      textStyle: 'text-body-bold',
      marginInlineEnd: '0',
    },
    description: {
      textStyle: 'text-body-regular',
    },
  },
  defaultProps: {
    variant: 'solid',
  },
  variants: {
    solid: variantSolid,
    subtle: generateVariantByStatus,
    'left-accent': generateVariantByStatus,
    outline: variantOutline,
  },
};
