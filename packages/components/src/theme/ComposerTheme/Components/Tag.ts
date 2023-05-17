import { ComponentStyleConfig } from '@chakra-ui/theme';

const baseStyle = {
  container: {
    bg: 'background-container-default',
    color: 'text-secondary',
    border: '0.0625rem solid var(--chakra-colors-ui-element-outline-default)',
    borderRadius: '0.375rem',
  },
  label: {
    color: 'text-secondary',
    textStyle: 'text-body-medium',
  },
  leftIcon: {
    marginInlineEnd: '0.25rem',
    textStyle: 'text-body-medium',
  },
  rightIcon: {
    marginInlineStart: '0.25rem',
    textStyle: 'text-body-medium',
  },
};

export const Tag: ComponentStyleConfig = {
  parts: ['container', 'label', 'closeButton', 'leftIcon', 'rightIcon'],
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
      leftIcon: theme.components.Icon.sizes.xs,
      rightIcon: theme.components.Icon.sizes.xs,
    }),
    m: ({ theme }) => ({
      container: {
        padding: '0.0625rem 0.5rem',
      },
      label: {
        ...theme.textStyles['text-body-meta-medium'],
      },
      leftIcon: theme.components.Icon.sizes.xs,
      rightIcon: theme.components.Icon.sizes.xs,
    }),
    l: ({ theme }) => ({
      container: {
        padding: '0.25rem 0.75rem',
      },
      label: {
        ...theme.textStyles['text-body-medium'],
      },
      leftIcon: theme.components.Icon.sizes.s,
      rightIcon: theme.components.Icon.sizes.s,
    }),
  },
  defaultProps: {
    size: 'l',
  },
};
