import { ComponentStyleConfig } from '@chakra-ui/react';

export const SegmentedButton: ComponentStyleConfig = {
  parts: ['button'],
  baseStyle: {
    button: {
      borderRadius: 'unset',
      borderRightWidth: '1px',
      borderTopWidth: '1px',
      borderBottomWidth: '1px',
      borderStyle: 'solid',
      gap: 'spacer-2',
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
      _focus: {
        zIndex: '1',
      },
    },
  },
  sizes: {
    xs: ({ theme }) => ({
      button: {
        px: '8px',
        py: '4px',
        ...theme.textStyles['text-body-floating-label-medium'],
      },
    }),
    s: ({ theme }) => ({
      button: {
        px: '12px',
        py: '8px',
        ...theme.textStyles['text-body-meta-medium'],
      },
    }),
    m: ({ theme }) => ({
      button: {
        px: '12px',
        py: '8px',
        ...theme.textStyles['text-body-medium'],
      },
    }),
    l: ({ theme }) => ({
      button: {
        px: '24px',
        py: '12px',
        ...theme.textStyles['text-body-large-medium'],
      },
    }),
  },
  variants: {
    primary: ({ isActive }) => ({
      button: {
        backgroundColor: isActive ? 'primary-default' : 'background-action-default',
        color: isActive ? 'text-light' : 'text-secondary',
        borderColor: isActive ? 'primary-default' : 'ui-element-outline-default',
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
    'primary-alt': ({ isActive }) => ({
      button: {
        backgroundColor: isActive ? 'background-action-pressed' : 'background-action-default',
        color: isActive ? 'text-link-primary-default' : 'text-secondary',
        borderColor: isActive ? 'primary-default' : 'ui-element-outline-default',
        // ...(isActive && { borderLeftWidth: '1px' }),

        _hover: {
          // backgroundColor: isActive ? 'background-action-pressed' : 'background-action-hover',
          // color: isActive ? 'text-link-primary-default' : 'text-secondary',
          ...(!isActive && {
            backgroundColor: 'background-action-hover',
            color: 'text-secondary',
          }),
        },
        _disabled: {
          color: isActive ? 'text-link-primary-disabled' : 'text-disabled',
          backgroundColor: 'background-action-disabled',
          ...(isActive && { borderColor: 'text-link-primary-disabled' }),
        },
        _focus: {
          outline: '3px solid var(--chakra-colors-primary-focus)',
        },
      },
    }),
    secondary: ({ isActive }) => ({
      button: {
        backgroundColor: isActive ? 'secondary-default' : 'background-action-default',
        color: isActive ? 'text-light' : 'text-secondary',
        borderColor: isActive ? 'secondary-default' : 'ui-element-outline-default',
        _hover: {
          backgroundColor: isActive ? 'secondary-default' : 'background-action-hover',
          color: isActive ? 'text-light' : 'text-secondary',
        },
        _disabled: {
          color: isActive ? 'text-light' : 'text-disabled',
          backgroundColor: isActive ? 'secondary-disabled' : 'background-action-disabled',
          ...(isActive && { borderColor: 'secondary-disabled' }),
        },
        _focus: {
          outline: '3px solid var(--chakra-colors-secondary-focus)',
        },
      },
    }),
    'secondary-alt': ({ isActive }) => ({
      button: {
        backgroundColor: isActive ? 'background-action-pressed' : 'background-action-default',
        color: isActive ? 'text-link-secondary-default' : 'text-secondary',
        borderColor: isActive ? 'secondary-default' : 'ui-element-outline-default',
        // ...(isActive && { borderLeftWidth: '1px' }),

        _hover: {
          // backgroundColor: isActive ? 'background-action-pressed' : 'background-action-hover',
          // color: isActive ? 'text-link-primary-default' : 'text-secondary',
          ...(!isActive && {
            backgroundColor: 'background-action-hover',
            color: 'text-secondary',
          }),
        },
        _disabled: {
          color: isActive ? 'text-link-secondary-disabled' : 'text-disabled',
          backgroundColor: 'background-action-disabled',
          ...(isActive && { borderColor: 'text-link-secondary-disabled' }),
        },
        _focus: {
          outline: '3px solid var(--chakra-colors-secondary-focus)',
        },
      },
    }),
  },
  defaultProps: {
    variant: 'primary',
  },
};
