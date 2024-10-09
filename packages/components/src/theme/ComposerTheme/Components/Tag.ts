import { ComponentStyleConfig } from '@chakra-ui/theme';

const createVariantStyles = (variant: string) => ({
  container: {
    backgroundColor: `background-tag-${variant}-default`,
    color: `text-tag-${variant}`,
    borderColor: `ui-element-outline-tag-${variant}`,
    borderWidth: '0.063rem',
    _hover: {
      backgroundColor: `background-tag-${variant}-hover`,
    },
    _focus: {
      backgroundColor: `background-tag-${variant}-focus`,
      boxShadow: `0 0 0 0.188rem var(--chakra-colors-primary-focus)`,
    },
    _active: {
      backgroundColor: `background-tag-${variant}-pressed`,
    },
    _disabled: {
      backgroundColor: `background-tag-${variant}-disabled`,
      color: `text-tag-${variant}-disabled`,
      pointerEvents: 'none',
    },
  },
  label: {
    color: `text-tag-${variant}`,
  },
});

export const Tag: ComponentStyleConfig = {
  parts: ['container', 'label', 'closeButton', 'leftIcon', 'rightIcon'],
  baseStyle: {
    container: {
      bg: 'background-action-default',
      color: 'text-tag-subtle',
      border: '0.0625rem solid var(--chakra-colors-ui-element-outline-default)',
      borderRadius: 'radii-tag',
      _hover: {
        backgroundColor: 'background-action-hover',
      },
      _focus: {
        backgroundColor: 'background-action-focus',
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
      color: 'text-tag-subtle',
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
  },
  variants: {
    subtle: {
      container: {
        bg: 'background-action-default',
        color: 'text-tag-subtle',
        _hover: {
          backgroundColor: 'background-action-hover',
        },
        _focus: {
          backgroundColor: 'background-action-focus',
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
        color: 'text-tag-subtle',
      },
    },
    solid: createVariantStyles('solid'),
    outline: {
      container: {
        backgroundColor: 'transparent',
        borderColor: 'ui-element-outline-tag',
        borderWidth: '0.063rem',
        color: 'text-tag-outline',
        _hover: {
          borderColor: 'ui-element-outline-tag-hover',
        },
        _focus: {
          boxShadow: `0 0 0 0.188rem var(--chakra-colors-primary-focus)`,
        },
        _active: {
          borderColor: 'ui-element-outline-tag-pressed',
        },
        _disabled: {
          borderColor: 'ui-element-outline-tag-disabled',
          pointerEvents: 'none',
        },
      },
      label: {
        color: 'text-tag-outline',
      },
    },
    custom: createVariantStyles('custom'),
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
    variant: 'subtle',
  },
};
