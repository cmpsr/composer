import { ComponentStyleConfig } from '@chakra-ui/react';

export const Breadcrumb: ComponentStyleConfig = {
  parts: ['container', 'separator', 'lastItem'],
  baseStyle: ({ theme }) => ({
    container: {
      columnGap: '0.5rem',
    },
    separator: {
      ...theme.textStyles['text-body-medium'],
      color: 'text-primary',
    },
    lastItem: {
      ...theme.textStyles['text-body-medium'],
      color: 'text-secondary',
    },
  }),
};
