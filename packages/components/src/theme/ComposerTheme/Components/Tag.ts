import { ComponentStyleConfig } from '@chakra-ui/react';

const baseStyle = {
  fontStyle: 'text-body-medium',
  container: {
    bg: 'background-container-default',
    color: 'text-secondary',
    border: '0.0625rem solid var(--chakra-colors-ui-element-outline-default)',
    borderRadius: '0.375rem',
  },
  label: {
    color: 'text-secondary',
  },
  leftIcon: {
    marginInlineEnd: '0.25rem',
  },
  rightIcon: {
    marginInlineStart: '0.25rem',
  },
};

export const Tag: ComponentStyleConfig = {
  baseStyle: baseStyle,
  variants: {
    subtle: baseStyle,
  },
  sizes: {
    s: ({ theme }) => ({
      container: {
        padding: '0rem 0.5rem',
      },
      label: {
        ...theme.textStyles['text-body-floating-label-medium'],
      },
      leftIcon: {
        boxSize: theme.components.Icon.sizes.xs.boxSize,
      },
      rightIcon: {
        boxSize: theme.components.Icon.sizes.xs.boxSize,
      },
    }),
    m: ({ theme }) => ({
      container: {
        padding: '0.0625rem 0.5rem',
      },
      label: {
        ...theme.textStyles['text-body-meta-medium'],
      },
      leftIcon: {
        boxSize: theme.components.Icon.sizes.xs.boxSize,
      },
      rightIcon: {
        boxSize: theme.components.Icon.sizes.xs.boxSize,
      },
    }),
    l: ({ theme }) => ({
      container: {
        padding: '0.25rem 0.75rem',
      },
      label: {
        ...theme.textStyles['text-body-medium'],
      },
      leftIcon: {
        boxSize: theme.components.Icon.sizes.s.boxSize,
      },
      rightIcon: {
        boxSize: theme.components.Icon.sizes.s.boxSize,
      },
    }),
  },
  defaultProps: {
    size: 'l',
  },
};
