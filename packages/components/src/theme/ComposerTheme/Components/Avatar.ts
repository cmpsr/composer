import { ComponentStyleConfig } from '@chakra-ui/theme';

// This function has been taken from the chakra source code
const getSize = (size: string) => ({
  container: {
    width: size,
    height: size,
    fontSize: `calc(${size} / 2.5)`,
  },
  excessLabel: {
    width: size,
    height: size,
  },
  label: {
    fontSize: `calc(${size} / 2.5)`,
    lineHeight: size !== '100%' ? size : undefined,
  },
});

export const Avatar: ComponentStyleConfig = {
  baseStyle: {
    container: {
      backgroundColor: 'primary-disabled',
    },
    label: {
      textColor: 'text-secondary',
    },
  },
  sizes: {
    xxl: {
      ...getSize('8rem'),
      textStyle: 'text-body-display-XL',
    },
    xl: {
      ...getSize('6rem'),
      textStyle: 'text-body-display-L',
    },
    l: {
      ...getSize('4rem'),
      textStyle: 'text-body-display-S',
    },
    m: {
      ...getSize('3rem'),
      textStyle: 'text-body-display-XS',
    },
    s: {
      ...getSize('2rem'),
      textStyle: 'font-body-meta-regular',
    },
    xs: {
      ...getSize('1.5rem'),
      textStyle: 'font-body-floating-label-medium',
    },
  },
  defaultProps: {
    size: 'm',
  },
};

export const AvatarBadge: ComponentStyleConfig = {
  baseStyle: {
    backgroundColor: 'alert-success-default',
    borderColor: 'background-container-card',
  },
  sizes: {
    xxl: {
      boxSize: '3.375rem',
    },
    xl: {
      boxSize: '2.5rem',
    },
    l: {
      boxSize: '1.75rem',
    },
    m: {
      boxSize: '1.25rem',
    },
    s: {
      boxSize: '0.875rem',
    },
    xs: {
      boxSize: '0.625rem',
    },
  },
  defaultProps: {
    variant: 'solid',
    size: 'm',
  },
};
