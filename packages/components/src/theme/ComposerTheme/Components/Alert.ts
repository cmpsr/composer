import { ComponentStyleConfig } from '@chakra-ui/react';
import { alertAnatomy as parts } from '@chakra-ui/anatomy';
import { PartsStyleFunction } from '@chakra-ui/theme-tools';

const defaultContainerColorScheme = {
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
      backgroundColor: 'alert-inform-default',
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
    closeButton: {
      color: 'text-light',
    },
  };
};

const generateOtherVariants: PartsStyleFunction<typeof parts> = (props) => {
  const { status, variant } = props;

  return {
    container: {
      ...(containerColorScheme[variant]?.[status] || {}),
      ...(variant === 'left-accent' && { pr: '0.5rem' }),
    },
  };
};

export const Alert: ComponentStyleConfig = {
  baseStyle: ({ theme }) => ({
    container: {
      borderRadius: '0.4rem',
      py: '0.75rem',
      pl: '1rem',
      pr: '0.25rem',
    },
    icon: {
      ...theme.components.Icon.sizes.l,
      alignSelf: 'flex-start',
      marginInlineEnd: '0.625rem',
      svg: {
        ...theme.components.Icon.sizes.l,
      },
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
      marginInlineEnd: '0.75rem',
    },
    description: {
      color: 'text-primary',
      textStyle: 'text-body-regular',
      paddingRight: '2.125rem',
    },
    // TODO: Remove this closeButton styles once our custom implementation of this component is merged into master
    closeButton: {
      boxSize: '1.5rem',
      '& svg': {
        boxSize: '1rem',
      },
    },
  }),
  defaultProps: {
    variant: 'solid',
  },
  variants: {
    solid: variantSolid,
    subtle: generateOtherVariants,
    'left-accent': generateOtherVariants,
  },
};
