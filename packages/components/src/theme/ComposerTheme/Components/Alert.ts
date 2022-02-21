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
    backgroundColor: 'background-info',
    borderStartColor: 'alert-info-default',
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
      backgroundColor: 'alert-info-default',
    },
  },
  subtle: containerStatusesColors,
  'left-accent': containerStatusesColors,
};

const subtleToastVariant: PartsStyleFunction<typeof parts> = ({ status, variant }) => {
  let accentType;
  const hasAccent = variant.includes('-accent');
  if (hasAccent) accentType = (variant as string).substring(0, variant.indexOf('-accent'));

  const accents = {
    top: {
      borderTop: `0.25rem solid var(--chakra-colors-alert-${status}-default)`,
    },
    left: {
      borderLeft: `0.25rem solid var(--chakra-colors-alert-${status}-default)`,
    },
  };

  return {
    container: {
      backgroundColor: `background-${status}`,
      ...accents[accentType],
    },
    title: { textStyle: 'text-body-bold', color: 'text-primary' },
    description: { textStyle: 'text-body-regular', color: 'text-primary' },
    icon: {
      margin: '0.25rem 0.25rem 0 0',
      ' svg': {
        boxSize: '1rem',
      },
      color: `alert-${status}-default`,
    },
  };
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
  baseStyle: ({ theme }) => ({
    container: {
      borderRadius: '0.375rem',
      py: '0.75rem',
      px: '1rem',
    },
    icon: {
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
          color: 'alert-info-default',
        },
      },
    },
    title: {
      ...theme.textStyles['text-body-bold'],
      marginInlineEnd: '0',
    },
    description: {
      ...theme.textStyles['text-body-regular'],
    },
  }),
  defaultProps: {
    variant: 'solid',
  },
  variants: {
    'top-accent-toast': subtleToastVariant,
    solid: variantSolid,
    subtle: generateVariantByStatus,
    'left-accent': generateVariantByStatus,
  },
};
