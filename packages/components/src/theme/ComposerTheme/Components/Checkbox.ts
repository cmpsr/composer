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
        _hover: {
          background: 'primary-hover',
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
    s: {
      control: { h: 3, w: 3 },
      label: { textStyle: 'text-body-meta-regular' },
      icon: { fontSize: '0.45rem' },
    },
    m: {
      control: { w: 4, h: 4 },
      label: { textStyle: 'text-body-regular' },
      icon: { fontSize: '0.625rem' },
    },
    l: {
      control: { w: 5, h: 5 },
      label: { textStyle: 'text-body-large-regular' },
      icon: { fontSize: '0.625rem' },
    },
  },
  defaultProps: {
    size: 'md',
  },
};
