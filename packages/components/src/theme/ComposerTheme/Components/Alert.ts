import { ComponentStyleConfig } from '@chakra-ui/react';
import { alertAnatomy as parts } from '@chakra-ui/anatomy';
import { PartsStyleFunction } from '@chakra-ui/theme-tools';

const defaultContainerColorScheme = {
  success: {
    backgroundColor: 'background-success',
  },
  error: {
    backgroundColor: 'background-error',
  },
  warning: {
    backgroundColor: 'background-warning',
  },
  info: {
    backgroundColor: 'background-inform',
  },
};

const containerColorScheme = {
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
      backgroundColor: 'alert-info-default',
    },
  },
  subtle: defaultContainerColorScheme,
  'left-accent': defaultContainerColorScheme,
};

const variantSolid: PartsStyleFunction<typeof parts> = (props) => {
  const { status, variant } = props;

  return {
    container: {
      ...(containerColorScheme[variant]?.[status] || {}),
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

const generateOtherVariants: PartsStyleFunction<typeof parts> = (props) => {
  const { status, variant } = props;

  return {
    container: {
      ...(containerColorScheme[variant]?.[status] || {}),
    },
  };
};

export const Alert: ComponentStyleConfig = {
  baseStyle: {
    container: {
      borderRadius: '0.4rem',
      padding: '1rem',
    },
    icon: {
      boxSize: '1.5rem',
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
      color: 'text-primary',
      textStyle: 'text-body-bold',
      marginRight: '1rem',
    },
    description: {
      color: 'text-primary',
      textStyle: 'text-body-regular',
      paddingRight: '1.7rem',
    },
  },
  defaultProps: {
    variant: 'solid',
  },
  variants: {
    solid: variantSolid,
    subtle: generateOtherVariants,
    'left-accent': generateOtherVariants,
  },
};
