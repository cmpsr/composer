import { ComponentStyleConfig } from '@chakra-ui/theme';

export const Link: ComponentStyleConfig = {
  baseStyle: {
    color: 'text-link-primary-default',
    _hover: {
      textDecoration: 'none',
      color: 'text-link-primary-hover',
    },
    _pressed: {
      color: 'text-link-primary-pressed',
    },
    _visited: {
      color: 'text-link-primary-pressed',
    },
    _focus: {
      boxShadow: `0 0 0 3px var(--chakra-colors-primary-focus)`,
      borderRadius: '3px',
    },
    _focusVisible: {
      boxShadow: `0 0 0 3px var(--chakra-colors-primary-focus)`,
      borderRadius: '3px',
    },
  },
  sizes: {
    s: {
      textStyle: 'text-link-body-small',
    },
    m: {
      textStyle: 'text-link-body-medium',
    },
    l: {
      textStyle: 'text-link-body-large',
    },
  },
};
