import { ComponentStyleConfig } from '@chakra-ui/react';

export const Alert: ComponentStyleConfig = {
  baseStyle: {
    container: {
      borderRadius: '6px',
      padding: '14px',
    },
    icon: {
      boxSize: '24px',
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
      marginRight: '14px',
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
    solid: {
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
    },
  },
};
