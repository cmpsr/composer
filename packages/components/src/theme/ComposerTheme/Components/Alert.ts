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
      status: {
        success: {
          color: 'text-light',
        },
        warning: {
          color: 'text-light',
        },
        error: {
          color: 'text-light',
        },
        info: {
          color: 'text-light',
        },
      },
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
  baseStyle: ({ theme }) => ({
    container: {
      borderRadius: '0.375rem',
      py: '0.75rem',
      px: '1rem',
    },
    icon: {
      ...theme.components.Icon.sizes.l,
      alignSelf: 'flex-start',
      marginInlineEnd: '0.625rem',
      status: {
        success: {
          color: 'alert-success-default',
        },
        warning: {
          color: 'alert-warning-default',
        },
        error: {
          color: 'alert-error-default',
        },
        info: {
          color: 'alert-inform-default',
        },
      },
    },
    title: {
      textStyle: 'text-body-bold',
      marginInlineEnd: '0',
    },
    description: {
      textStyle: 'text-body-regular',
    },
  }),
  defaultProps: {
    variant: 'solid',
  },
  variants: {
    solid: variantSolid,
    subtle: generateVariantByStatus,
    'left-accent': generateVariantByStatus,
  },
};
