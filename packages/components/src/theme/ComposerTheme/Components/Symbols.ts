import { ComponentStyleConfig } from '@chakra-ui/react';

export const Symbols: ComponentStyleConfig = {
  baseStyle: {
    textStyle: 'text-body-meta-regular',
    color: 'text-primary',
    background: 'background-card',
    borderStyle: 'solid',
    borderColor: 'ui-element-outline-default',
    borderWidth: '0.0625rem',
    borderRadius: '0.375rem',
    paddingX: '0.25rem',
    paddingY: '0.125rem',
    // Override default chakra borderBottomWidth
    borderBottomWidth: '0.0625rem',
  },
};
