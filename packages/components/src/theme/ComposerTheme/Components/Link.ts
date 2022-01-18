import { ComponentStyleConfig } from '@chakra-ui/theme';
import { convertHexToRGBA } from '../Colors/utils';
import { defaultColors } from '../Colors';

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
      borderRadius: '3px',
      boxShadow: `0 0 0 3px ${convertHexToRGBA(
        defaultColors['primary-focus'],
        1
      )}`,
    },
    _focusVisible: {
      borderRadius: '3px',
      boxShadow: `0 0 0 3px ${convertHexToRGBA(
        defaultColors['primary-focus'],
        1
      )}`,
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
