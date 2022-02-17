import { ComponentStyleConfig } from '@chakra-ui/react';

export const Symbols: ComponentStyleConfig = {
  baseStyle: ({ theme }) => ({
    ...theme.textStyles['text-body-floating-label-bold'],
    color: 'text-primary',
    background: 'background-card',
    borderStyle: 'solid',
    borderColor: 'ui-element-outline-default',
    borderWidth: '0.0625rem',
    borderRadius: 'radii-2',
    paddingX: '0.25rem',
    paddingY: '0.125rem',
    // Override default chakra borderBottomWidth
    borderBottomWidth: '0.0625rem',
  }),
};
