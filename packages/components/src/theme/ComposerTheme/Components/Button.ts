import { ComponentStyleConfig } from '@chakra-ui/theme';
import { transparentize } from '@chakra-ui/theme-tools';

const generateButton = (color: string, textColor?: string) => {
  const _disabled = {
    backgroundColor: `${color}-disabled`,
    opacity: 1,
    color: transparentize(`text-button-${textColor || color}`, 0.5),
  };
  return {
    color: `text-button-${textColor || color}`,
    backgroundColor: `${color}-default`,
    _disabled,
    _hover: {
      backgroundColor: `${color}-hover`,
      _disabled,
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
  };
};

const generateAltButton = (color: string) => {
  const _disabled = {
    backgroundColor: 'background-container-disabled',
    opacity: 1,
    color: transparentize(`text-link-${color}-default`, 0.5),
    borderColor: transparentize(`text-link-${color}-default`, 0.5),
  };
  return {
    backgroundColor: 'background-action-default',
    color: `text-link-${color}-default`,
    border: '1px solid',
    borderColor: `text-link-${color}-default`,
    _disabled,
    _hover: {
      backgroundColor: 'background-action-hover',
      _disabled,
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
  };
};

export const Button: ComponentStyleConfig = {
  baseStyle: {
    borderRadius: '0.375rem',
  },
  sizes: {
    xs: ({ theme }) => ({
      ...theme.textStyles['text-body-floating-label-medium'],
      px: '0.5rem',
      py: '0.25rem',
    }),
    sm: ({ theme }) => ({
      ...theme.textStyles['text-body-meta-medium'],
      px: '0.75rem',
      py: '0.5rem',
    }),
    md: ({ theme }) => ({
      ...theme.textStyles['text-body-medium'],
      px: '1rem',
      py: '0.5rem',
    }),
    lg: ({ theme }) => ({
      ...theme.textStyles['text-body-large-medium'],
      px: '1.5rem',
      py: '0.75rem',
    }),
  },
  variants: {
    accent: generateButton('accent'),
    primary: generateButton('primary'),
    secondary: generateButton('secondary'),
    'primary-alt': generateAltButton('primary'),
    'secondary-alt': generateAltButton('secondary'),
    destroy: generateButton('alert-error', 'alert'),
  },
  defaultProps: {
    size: 'md',
    variant: 'primary',
  },
};
