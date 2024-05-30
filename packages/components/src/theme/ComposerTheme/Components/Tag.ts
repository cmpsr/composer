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
    _active: {
      backgroundColor: 'background-action-pressed',
    },
    _disabled: {
      backgroundColor: 'background-container-disabled',
      pointerEvents: 'none',
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
    textStyle: 'text-body-medium',
    margin: 0,
  },
  rightIcon: {
    textStyle: 'text-body-medium',
    margin: 0,
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
        px: 'spacer-tag-x-S',
        py: 'spacer-tag-y-S',
        gap: 'spacer-tag-gap-S',
      },
      label: {
        ...theme.textStyles['text-body-floating-label-medium'],
      },
      leftIcon: theme.components.Icon.sizes.xs,
      rightIcon: theme.components.Icon.sizes.xs,
    }),
    m: ({ theme }) => ({
      container: {
        px: 'spacer-tag-x-M',
        py: 'spacer-tag-y-M',
        gap: 'spacer-tag-gap-M',
      },
      label: {
        ...theme.textStyles['text-body-meta-medium'],
      },
      leftIcon: theme.components.Icon.sizes.xs,
      rightIcon: theme.components.Icon.sizes.xs,
    }),
    l: ({ theme }) => ({
      container: {
        px: 'spacer-tag-x-L',
        py: 'spacer-tag-y-L',
        gap: 'spacer-tag-gap-L',
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
