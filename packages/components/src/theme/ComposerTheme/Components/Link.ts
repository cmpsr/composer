import { ComponentStyleConfig } from '@chakra-ui/theme';

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
<<<<<<< HEAD
      ...theme.textStyles['text-link-body-small'],
      color: 'text-link-primary-default',
    }),
    m: ({ theme }) => ({
      ...theme.textStyles['text-link-body-medium'],
      color: 'text-link-primary-default',
    }),
    l: ({ theme }) => ({
      ...theme.textStyles['text-link-body-large'],
      color: 'text-link-primary-default',
=======
      ' p': {
        ...theme.textStyles['text-link-body-small'],
        color: 'text-link-primary-default',
      },
    }),
    m: ({ theme }) => ({
      ' p': {
        ...theme.textStyles['text-link-body-medium'],
        color: 'text-link-primary-default',
      },
    }),
    l: ({ theme }) => ({
      ' p': {
        ...theme.textStyles['text-link-body-large'],
        color: 'text-link-primary-default',
      },
>>>>>>> 65110b0c59143abd8cb4f173f087c95356597fb7
    }),
  },
};
