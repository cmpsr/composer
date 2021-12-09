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
    borderRadius: 'radii-2',
    color: 'text-light',
  },
  sizes: {
    xs: {
      textStyle: 'font-body-floating-label-medium',
      px: 'spacer-2',
      py: 'spacer-1',
    },
    sm: {
      textStyle: 'font-body-meta-medium',
      px: 'spacer-3',
      py: 'spacer-2',
    },
    md: {
      textStyle: 'font-body-medium',
      px: 'spacer-4',
      py: 'spacer-2',
    },
    lg: {
      textStyle: 'font-body-large-medium',
      px: 'spacer-6',
      py: 'spacer-3',
    },
  },
  variants: {
    accent: generateButton('accent'),
    primary: generateButton('primary-ui'),
    secondary: generateButton('secondary-ui'),
    'primary-alt': generateAltButton('primary-ui'),
    'secondary-alt': generateAltButton('secondary-ui'),
    destroy: generateButton('alert-error'),
  },
  defaultProps: {
    size: 'md',
    variant: 'primary',
  },
};
