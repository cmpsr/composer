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
    xxl: ({ theme }) => ({
      ...getSize('8rem'),
      ...theme.textStyles['text-body-display-XL'],
    }),
    xl: ({ theme }) => ({
      ...getSize('6rem'),
      ...theme.textStyles['text-body-display-L'],
    }),
    l: ({ theme }) => ({
      ...getSize('4rem'),
      ...theme.textStyles['text-body-display-S'],
    }),
    m: ({ theme }) => ({
      ...getSize('3rem'),
      ...theme.textStyles['text-body-display-XS'],
    }),
    s: ({ theme }) => ({
      ...getSize('2rem'),
      ...theme.textStyles['font-body-meta-regular'],
    }),
    xs: ({ theme }) => ({
      ...getSize('1.5rem'),
      ...theme.textStyles['font-body-floating-label-medium'],
    }),
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
