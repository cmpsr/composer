import { ComponentStyleConfig } from '@chakra-ui/react';
import { alertAnatomy as parts } from '@chakra-ui/anatomy';
import { PartsStyleFunction } from '@chakra-ui/theme-tools';
import { getAlertStatus } from '../../../utils';

const solidToastVariant: PartsStyleFunction<typeof parts> = ({ status }) => {
  const alertStatus = getAlertStatus(status);
  return {
    container: {
      backgroundColor: `alert-${alertStatus}-default`,
      color: 'text-light',
    },
    title: { textStyle: 'text-body-bold', color: 'text-light' },
    description: { textStyle: 'text-body-regular', color: 'text-light' },
    icon: {
      margin: '0.25rem 0.25rem 0 0',
      ' svg': {
        boxSize: '1rem',
      },
      color: 'text-light',
    },
  };
};

const subtleToastVariant: PartsStyleFunction<typeof parts> = ({
  status,
  variant,
}) => {
  let accentType;
  const hasAccent = variant.includes('-accent');
  if (hasAccent)
    accentType = (variant as string).substring(0, variant.indexOf('-accent'));

  const alertStatus = getAlertStatus(status);
  const accents = {
    top: {
      borderTop: `0.25rem solid var(--chakra-colors-alert-${alertStatus}-default)`,
    },
    left: {
      borderLeft: `0.25rem solid var(--chakra-colors-alert-${alertStatus}-default)`,
    },
  };

  return {
    container: {
      backgroundColor: `background-${alertStatus}`,
      ...accents[accentType],
    },
    title: { textStyle: 'text-body-bold', color: 'text-primary' },
    description: { textStyle: 'text-body-regular', color: 'text-primary' },
    icon: {
      margin: '0.25rem 0.25rem 0 0',
      ' svg': {
        boxSize: '1rem',
      },
      color: `alert-${alertStatus}-default`,
    },
  };
};

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
  baseStyle: ({ theme }) => ({
    container: {
      borderRadius: '0.4rem',
      padding: '1rem',
    },
    icon: {
      ...theme.components.Icon.sizes.l,
      alignSelf: 'flex-start',
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
      marginRight: '1rem',
    },
    description: {
      color: 'text-primary',
      textStyle: 'text-body-regular',
      paddingRight: '1.7rem',
    },
  }),
  defaultProps: {
    variant: 'solid',
  },
  variants: {
    // Toast component is built with the Alert component
    // so it uses this theme implementation. To add custom toast styles,
    // we need these new variants.
    'solid-toast': solidToastVariant,
    'subtle-toast': subtleToastVariant,
    'left-accent-toast': subtleToastVariant,
    'top-accent-toast': subtleToastVariant,
    // Alerts
    solid: variantSolid,
    subtle: generateOtherVariants,
    'left-accent': generateOtherVariants,
  },
};
