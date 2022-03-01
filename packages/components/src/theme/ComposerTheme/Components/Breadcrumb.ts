import { ComponentStyleConfig } from '@chakra-ui/react';

const secondaryText = (theme) => ({
  ...theme.textStyles['text-body-medium'],
  color: 'text-secondary',
});

export const Breadcrumb: ComponentStyleConfig = {
  parts: ['container', 'separator', 'separatorIcon', 'lastItem'],
  baseStyle: ({ theme }) => ({
    container: {
      columnGap: '0.5rem',
      alignItems: 'center',
      display: 'flex',
    },
    separator: { ...secondaryText(theme) },
    lastItem: { ...secondaryText(theme) },
  }),
};
