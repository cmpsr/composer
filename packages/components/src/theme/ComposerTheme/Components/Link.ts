import { ComponentStyleConfig } from '@chakra-ui/theme';

const sharedLinkStyles = {
  color: 'text-link-primary-default',
  textDecoration: 'none',
};

export const Link: ComponentStyleConfig = {
  baseStyle: {
    maxWidth: '100%',
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
      boxShadow: `0 0 0 4px var(--chakra-colors-primary-focus)`,
      borderRadius: '4px',
    },
    _focusVisible: {
      boxShadow: `0 0 0 4px var(--chakra-colors-primary-focus)`,
      borderRadius: '4px',
    },
  },
  sizes: {
    s: ({ theme }) => ({
      p: {
        ...theme.textStyles['text-body-meta-medium'],
        ...sharedLinkStyles,
      },
    }),
    m: ({ theme }) => ({
      p: {
        ...theme.textStyles['text-body-medium'],
        ...sharedLinkStyles,
      },
    }),
    l: ({ theme }) => ({
      p: {
        ...theme.textStyles['text-body-large-medium'],
        ...sharedLinkStyles,
      },
    }),
  },
};
