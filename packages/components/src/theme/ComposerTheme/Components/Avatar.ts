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
    badge: {
      backgroundColor: 'alert-success-default',
      borderColor: 'var(--chakra-colors-background-container-card)',
    },
  },
  sizes: {
    xxl: {
      ...getSize('8rem'),
      textStyle: 'text-body-display-XL',
      badge: {
        boxSize: '3.375rem',
      },
    },
    xl: {
      ...getSize('6rem'),
      textStyle: 'text-body-display-L',
      badge: {
        boxSize: '2.5rem',
      },
    },
    l: {
      ...getSize('4rem'),
      textStyle: 'text-body-display-S',
      badge: {
        boxSize: '1.75rem',
      },
    },
    m: {
      ...getSize('3rem'),
      textStyle: 'text-body-display-XS',
      badge: {
        boxSize: '1.25rem',
      },
    },
    s: {
      ...getSize('2rem'),
      textStyle: 'font-body-meta-regular',
      badge: {
        boxSize: '0.875rem',
      },
    },
    xs: {
      ...getSize('1.5rem'),
      textStyle: 'font-body-floating-label-medium',
      badge: {
        boxSize: '0.625rem',
      },
    },
  },
  defaultProps: {
    size: 'm',
  },
};
