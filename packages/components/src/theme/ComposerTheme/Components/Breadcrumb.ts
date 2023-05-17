import { ComponentMultiStyleConfig } from '@chakra-ui/react';
import { breadcrumbAnatomy as parts } from '@chakra-ui/anatomy';

export const Breadcrumb: ComponentMultiStyleConfig = {
  parts: parts.keys,
  baseStyle: ({ theme }) => ({
    container: {
      '> ol': {
        display: 'flex',
        flexWrap: 'wrap',
      },
    },
    item: {
      ...theme.textStyles['text-body-medium'],
      color: 'text-secondary',
    },
    separator: {
      ...theme.textStyles['text-body-medium'],
      color: 'text-secondary',
      mx: '0.5rem',
      lineHeight: '1rem',
    },
    link: {
      ...theme.components.Link.sizes.m,
      _hover: {
        textDecoration: 'none',
      },
      _focus: {
        boxShadow: `0 0 0 0.1875rem var(--chakra-colors-primary-focus)`,
      },
    },
  }),
};
