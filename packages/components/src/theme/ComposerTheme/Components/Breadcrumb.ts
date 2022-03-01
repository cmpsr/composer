import { ComponentStyleConfig } from '@chakra-ui/react';

export const Breadcrumb: ComponentStyleConfig = {
  parts: ['container', 'separator', 'separatorIcon', 'lastItem'],
  baseStyle: ({ theme }) => ({
    container: {
      columnGap: '0.5rem',
      alignItems: 'center',
      display: 'flex'
    },
    separator: {
      ...theme.textStyles['text-body-medium'],
      color: 'text-secondary',
    },
    // separatorIcon: {
    //   size: 'm',
    //   color: 'text-secondary',
    // },
    lastItem: {
      ...theme.textStyles['text-body-medium'],
      color: 'text-secondary',
    },
  }),
};
