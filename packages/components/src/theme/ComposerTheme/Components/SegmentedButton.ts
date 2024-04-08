import { ComponentStyleConfig } from '@chakra-ui/react';

export const SegmentedButton: ComponentStyleConfig = {
  parts: ['button'],
  baseStyle: ({ isActive }) => ({
    button: {
      borderRadius: 'unset',
      borderRightWidth: '1px',
      borderTopWidth: '1px',
      borderBottomWidth: '1px',
      borderStyle: 'solid',
      gap: 'spacer-2',

      ...(isActive && { zIndex: '1' }),
      outlineOffset: 'unset',
      _first: {
        borderLeftWidth: '1px',
        borderTopLeftRadius: 'radii-button',
        borderBottomLeftRadius: 'radii-button',
      },
      _last: {
        borderTopRightRadius: 'radii-button',
        borderBottomRightRadius: 'radii-button',
      },
    },
  }),
  sizes: {
    // habrá que actualizar los paddings de px a tokens
    xs: ({ theme }) => ({
      px: '8px',
      py: '4px',
      ...theme.textStyles['text-body-floating-label-medium'],
    }),
    s: ({ theme }) => ({
      paddingLeft: '50px',
      paddingRight: '50px',
      px: '12px',
      py: '24px',
      ...theme.textStyles['text-body-meta-medium'],
    }),
    m: ({ theme }) => ({
      paddingInlineStart: '12px',
      paddingInlineEnd: '12px',
      py: '8px',
      ...theme.textStyles['text-body-medium'],
    }),
    l: ({ theme }) => ({
      px: 'spacer-6',
      py: '12px',
      ...theme.textStyles['text-body-large-medium'],
    }),
  },
  variants: {
    primary: ({ isActive }) => ({
      button: {
        backgroundColor: isActive ? 'primary-default' : 'background-action-default',
        color: isActive ? 'text-light' : 'text-secondary',
        borderColor: isActive
          ? 'var(--chakra-colors-primary-default)'
          : 'var(--chakra-colors-ui-element-outline-default)',
        _hover: {
          backgroundColor: isActive ? 'primary-default' : 'background-action-hover',
          color: isActive ? 'text-light' : 'text-secondary',
        },
        _disabled: {
          color: isActive ? 'text-light' : 'text-disabled',
          backgroundColor: isActive ? 'primary-disabled' : 'background-action-disabled',
          ...(isActive && { borderColor: 'primary-disabled' }),
        },
        _focus: {
          outline: '3px solid var(--chakra-colors-primary-focus)',
        },
      },
    }),
    // secondary: ({}) => {},
    // 'primary-alt': ({ status }) => {},
    // 'secondary-alt': ({ status }) => {},
  },
  defaultProps: {
    variant: 'primary',
  },
};
