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
      background: 'background-checkbox-default',
      borderColor: 'ui-element-outline-default',
      borderRadius: 'radii-checkbox',
      color: 'text-primary',
      _checked: {
        background: 'background-checkbox-selected',
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
        boxShadow: `0 0 0 0.1875rem var(--chakra-colors-primary-focus)`,
      },
      _disabled: {
        background: 'background-action-disabled',
        borderColor: 'ui-element-outline-checkbox-disabled',
      },
      _invalid: {
        borderColor: 'alert-error-default',
      },
    },
    container: {
      alignItems: 'start',
    },
  },
  sizes: {
    s: ({ theme }) => ({
      control: { h: 3, w: 3, mt: '0.25rem' },
      label: { textStyle: 'text-body-meta-regular' },
      icon: {
        ...theme.components.Icon.sizes.xs,
      },
    }),
    m: ({ theme }) => ({
      control: { w: 4, h: 4, mt: '0.25rem' },
      label: { textStyle: 'text-body-regular' },
      icon: {
        ...theme.components.Icon.sizes.s,
      },
    }),
    l: ({ theme }) => ({
      control: { w: 5, h: 5, mt: '0.25rem' },
      label: { textStyle: 'text-body-large-regular' },
      icon: {
        ...theme.components.Icon.sizes.m,
      },
    }),
  },
  defaultProps: {
    size: 'm',
  },
};
