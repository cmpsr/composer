import { ComponentStyleConfig } from '@chakra-ui/theme';

const generateButton = (color: string) => ({
  backgroundColor: `${color}-default`,
  _disabled: {
    backgroundColor: `${color}-disabled`,
  },
  _hover: {
    backgroundColor: `${color}-hover`,
    _disabled: {
      backgroundColor: `${color}-disabled`,
    },
  },
  _focus: {
    backgroundColor: `${color}-hover`,
    boxShadow: `0 0 0 3px var(--chakra-colors-${color}-focus)`,
  },
  _pressed: {
    backgroundColor: `${color}-pressed`,
  },
  _active: {
    backgroundColor: `${color}-pressed`,
  },
});

const generateAltButton = (color: string) => ({
  backgroundColor: 'background-action-default',
  color: `text-link-${color}-default`,
  border: '1px solid',
  borderColor: `text-link-${color}-default`,
  _disabled: {
    backgroundColor: 'background-container-disabled',
  },
  _hover: {
    backgroundColor: 'background-action-hover',
    _disabled: {
      backgroundColor: 'background-action-hover',
    },
  },
  _focus: {
    backgroundColor: 'background-action-hover',
    boxShadow: `0 0 0 3px var(--chakra-colors-${color}-focus)`,
  },
  _pressed: {
    backgroundColor: 'background-action-pressed',
  },
  _active: {
    backgroundColor: 'background-action-pressed',
  },
});

export const Button: ComponentStyleConfig = {
  baseStyle: {
    borderRadius: '0.375rem',
    color: 'text-light',
  },
  sizes: {
    xs: {
      textStyle: 'text-body-floating-label-medium',
      px: '0.5rem',
      py: '0.25rem',
    },
    sm: {
      textStyle: 'text-body-meta-medium',
      px: '0.75rem',
      py: '0.5rem',
    },
    md: {
      textStyle: 'text-body-medium',
      px: '1rem',
      py: '0.5rem',
    },
    lg: {
      textStyle: 'text-body-large-medium',
      px: '1.5rem',
      py: '0.75rem',
    },
  },
  variants: {
    accent: generateButton('accent'),
    primary: generateButton('primary'),
    secondary: generateButton('secondary'),
    'primary-alt': generateAltButton('primary'),
    'secondary-alt': generateAltButton('secondary'),
    destroy: generateButton('alert-error'),
  },
  defaultProps: {
    size: 'md',
    variant: 'primary',
  },
};
