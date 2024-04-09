import { ComponentStyleConfig } from '@chakra-ui/react';

export const SegmentedButton: ComponentStyleConfig = {
  parts: ['container', 'button'],
  baseStyle: ({ theme }) => ({
    container: {
      gap: '1px',
      bg: 'ui-element-outline-default',
      display: 'inline-flex',
      borderStyle: 'solid',
      borderWidth: '1px',
      borderColor: 'ui-element-outline-default',
      borderRadius: 'radii-button',
    },
    button: {
      borderRadius: 'unset',
      gap: 'spacer-2',
      outlineOffset: 'unset',
      _first: {
        borderTopLeftRadius: `calc(${theme.radii['radii-button']} - 0.0625rem)`,
        borderBottomLeftRadius: `calc(${theme.radii['radii-button']} - 0.0625rem)`,
      },
      _last: {
        borderTopRightRadius: `calc(${theme.radii['radii-button']} - 0.0625rem)`,
        borderBottomRightRadius: `calc(${theme.radii['radii-button']} - 0.0625rem)`,
      },
      _focus: {
        zIndex: '1',
      },
    },
  }),
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
        ...(isActive && { boxShadow: '0 0 0 1px var(--chakra-colors-primary-default)' }),
        _hover: {
          backgroundColor: isActive ? 'primary-default' : 'background-action-hover',
          color: isActive ? 'text-light' : 'text-secondary',
        },
        _active: {
          backgroundColor: isActive ? 'primary-default' : 'background-action-default',
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
        ...(isActive && { boxShadow: '0 0 0 1px var(--chakra-colors-primary-default)' }),
        _hover: {
          ...(!isActive && {
            backgroundColor: 'background-action-hover',
            color: 'text-secondary',
          }),
        },
        _active: {
          backgroundColor: isActive ? 'background-action-pressed' : 'background-action-default',
        },
        _disabled: {
          color: isActive ? 'text-link-primary-disabled' : 'text-disabled',
          backgroundColor: 'background-action-disabled',
          ...(isActive && { borderColor: 'text-link-primary-disabled' }),
        },
        _focusVisible: {
          outline: '3px solid var(--chakra-colors-primary-focus)',
          ...(isActive && { outlineOffset: '1px' }),
        },
        _focus: {
          outline: '3px solid var(--chakra-colors-primary-focus)',
          ...(isActive && { outlineOffset: '1px' }),
        },
      },
    }),
    // secondary: ({}) => {},
    // 'secondary-alt': ({ status }) => {},
  },
  defaultProps: {
    variant: 'primary',
  },
};
