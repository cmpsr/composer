import { ComponentStyleConfig } from '@chakra-ui/theme';

const baseStyle = {
  container: {
    bg: 'background-action-default',
    color: 'text-secondary',
    border: '0.0625rem solid var(--chakra-colors-ui-element-outline-default)',
    borderRadius: '0.375rem',
    _hover: {
      backgroundColor: 'background-action-hover',
    },
    _focus: {
      boxShadow: `0 0 0 0.188rem var(--chakra-colors-primary-focus)`,
    },
    _pressed: {
      backgroundColor: 'background-action-pressed',
    },
    _disabled: {
      backgroundColor: 'background-container-disabled',
    },
  },
  label: {
    color: 'text-secondary',
    textStyle: 'text-body-medium',
    _disabled: {
      color: 'text-disabled',
    },
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
