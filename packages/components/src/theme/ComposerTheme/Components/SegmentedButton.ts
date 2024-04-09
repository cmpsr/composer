import { ComponentStyleConfig } from '@chakra-ui/react';

const buttonActiveStyles = {
  primary: {
    backgroundColor: 'primary-default',
    color: 'text-light',
    boxShadow: '0 0 0 1px var(--chakra-colors-primary-default)',
    _hover: {
      backgroundColor: 'primary-default',
      color: 'text-light',
    },
    _active: {
      backgroundColor: 'primary-default',
    },
    _disabled: {
      color: 'text-light',
      backgroundColor: 'primary-disabled',
      boxShadow: '0 0 0 1px var(--chakra-colors-primary-disabled)',
    },
    _focus: {
      outline: '3px solid var(--chakra-colors-primary-focus)',
    },
  },
  'primary-alt': {
    backgroundColor: 'background-action-pressed',
    color: 'text-link-primary-default',
    boxShadow: '0 0 0 1px var(--chakra-colors-primary-default)',
    _hover: {
      backgroundColor: 'background-action-pressed',
    },
    _active: {
      backgroundColor: 'background-action-pressed',
    },
    _disabled: {
      color: 'text-link-primary-disabled',
      backgroundColor: 'background-action-disabled',
      boxShadow: '0 0 0 1px var(--chakra-colors-text-link-primary-disabled)',
    },
    _focusVisible: {
      outline: '3px solid var(--chakra-colors-primary-focus)',
      outlineOffset: '1px',
    },
    _focus: {
      outline: '3px solid var(--chakra-colors-primary-focus)',
      outlineOffset: '1px',
    },
  },
  secondary: {
    backgroundColor: 'secondary-default',
    color: 'text-light',
    boxShadow: '0 0 0 1px var(--chakra-colors-secondary-default)',
    _hover: {
      backgroundColor: 'secondary-default',
    },
    _active: {
      backgroundColor: 'secondary-default',
    },
    _disabled: {
      color: 'text-light',
      backgroundColor: 'secondary-disabled',
      boxShadow: '0 0 0 1px var(--chakra-colors-secondary-disabled)',
    },
    _focus: {
      outline: '3px solid var(--chakra-colors-secondary-focus)',
    },
  },
  'secondary-alt': {
    backgroundColor: 'background-action-pressed',
    color: 'text-link-secondary-default',
    boxShadow: '0 0 0 1px var(--chakra-colors-secondary-default)',
    _hover: {
      backgroundColor: 'background-action-pressed',
    },
    _active: {
      backgroundColor: 'background-action-pressed',
    },
    _disabled: {
      color: 'text-link-secondary-disabled',
      backgroundColor: 'background-action-disabled',
      boxShadow: '0 0 0 1px var(--chakra-colors-text-link-secondary-disabled)',
    },
    _focusVisible: {
      outline: '3px solid var(--chakra-colors-secondary-focus)',
      outlineOffset: '1px',
    },
    _focus: {
      outline: '3px solid var(--chakra-colors-secondary-focus)',
      outlineOffset: '1px',
    },
  },
};

const buttonStyles = {
  primary: {
    backgroundColor: 'background-action-default',
    color: 'text-secondary',
    _hover: {
      backgroundColor: 'background-action-hover',
      color: 'text-secondary',
    },
    _active: {
      backgroundColor: 'background-action-default',
    },
    _disabled: {
      color: 'text-disabled',
      backgroundColor: 'background-action-disabled',
    },
    _focus: {
      outline: '3px solid var(--chakra-colors-primary-focus)',
    },
  },
  'primary-alt': {
    backgroundColor: 'background-action-default',
    color: 'text-secondary',
    _hover: {
      backgroundColor: 'background-action-hover',
      color: 'text-secondary',
    },
    _active: {
      backgroundColor: 'background-action-default',
    },
    _disabled: {
      color: 'text-disabled',
      backgroundColor: 'background-action-disabled',
    },
    _focusVisible: {
      outline: '3px solid var(--chakra-colors-primary-focus)',
    },
    _focus: {
      outline: '3px solid var(--chakra-colors-primary-focus)',
    },
  },
  secondary: {
    backgroundColor: 'background-action-default',
    color: 'text-secondary',
    _hover: {
      backgroundColor: 'background-action-hover',
      color: 'text-secondary',
    },
    _active: {
      backgroundColor: 'background-action-default',
    },
    _disabled: {
      color: 'text-disabled',
      backgroundColor: 'background-action-disabled',
    },
    _focus: {
      outline: '3px solid var(--chakra-colors-secondary-focus)',
    },
  },
  'secondary-alt': {
    backgroundColor: 'background-action-default',
    color: 'text-secondary',
    _hover: {
      backgroundColor: 'background-action-hover',
      color: 'text-secondary',
    },
    _active: {
      backgroundColor: 'background-action-default',
    },
    _disabled: {
      color: 'text-disabled',
      backgroundColor: 'background-action-disabled',
    },
    _focusVisible: {
      outline: '3px solid var(--chakra-colors-secondary-focus)',
    },
    _focus: {
      outline: '3px solid var(--chakra-colors-secondary-focus)',
    },
  },
};

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
      button: isActive ? buttonActiveStyles.primary : buttonStyles.primary,
    }),
    'primary-alt': ({ isActive }) => ({
      button: isActive ? buttonActiveStyles['primary-alt'] : buttonStyles['primary-alt'],
    }),
    secondary: ({ isActive }) => ({
      button: isActive ? buttonActiveStyles.secondary : buttonStyles.secondary,
    }),
    'secondary-alt': ({ isActive }) => ({
      button: isActive ? buttonActiveStyles['secondary-alt'] : buttonStyles['secondary-alt'],
    }),
  },

  defaultProps: {
    variant: 'primary',
  },
};
