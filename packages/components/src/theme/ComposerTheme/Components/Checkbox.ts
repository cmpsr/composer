import { ComponentStyleConfig } from '@chakra-ui/theme';

export const Checkbox: ComponentStyleConfig = {
  baseStyle: {
    label: {
      color: 'text-primary',
      _disabled: {
        color: 'text-disabled',
        opacity: 1,
      },
    },
    control: {
      background: 'background-action-default',
      borderColor: 'ui-element-outline-default',
      color: 'text-primary',
      _checked: {
        background: 'primary-default',
        borderColor: 'primary-default',
        _hover: {
          background: 'primary-hover',
          borderColor: 'primary-hover',
        },
        _disabled: {
          borderColor: 'ui-element-outline-disabled',
          background: 'background-action-disabled',
          color: 'text-disabled',
        },
      },
      _focus: {
        boxShadow: `0 0 0 3px var(--chakra-colors-primary-focus)`,
      },
      _disabled: {
        background: 'background-action-disabled',
        borderColor: 'ui-element-outline-disabled',
      },
      _invalid: {
        borderColor: 'alert-error-default',
      },
    },
  },
  sizes: {
    s: ({ theme }) => ({
      control: { h: 3, w: 3 },
      label: { textStyle: 'text-body-meta-regular' },
      icon: {
        boxSize: theme.components.Icon.sizes.xs.boxSize,
        height: theme.components.Icon.sizes.xs.boxSize,
        width: theme.components.Icon.sizes.xs.boxSize,
      },
    }),
    m: ({ theme }) => ({
      control: { w: 4, h: 4 },
      label: { textStyle: 'text-body-regular' },
      icon: {
        boxSize: theme.components.Icon.sizes.s.boxSize,
        height: theme.components.Icon.sizes.s.boxSize,
        width: theme.components.Icon.sizes.s.boxSize,
      },
    }),
    l: ({ theme }) => ({
      control: { w: 5, h: 5 },
      label: { textStyle: 'text-body-large-regular' },
      icon: {
        boxSize: theme.components.Icon.sizes.m.boxSize,
        height: theme.components.Icon.sizes.m.boxSize,
        width: theme.components.Icon.sizes.m.boxSize,
      },
    }),
  },
  defaultProps: {
    size: 'm',
  },
};
