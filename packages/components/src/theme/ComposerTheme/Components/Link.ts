import { ComponentStyleConfig } from '@chakra-ui/theme';
import { convertHexToRGBA } from '../Colors/utils';
import { defaultColors } from '../Colors';

export const Link: ComponentStyleConfig = {
  baseStyle: {
    color: 'text-link-primary-default',
    _hover: {
      color: 'text-link-primary-hover',
    },
    _pressed: {
      color: 'text-primary-link-pressed',
    },
    _visited: {
      color: 'text-primary-link-pressed',
    },
    // TODO TEST IN MOZILLA
    _focus: {
      borderRadius: '3px',
      boxShadow: `0 0 0 3px ${convertHexToRGBA(
        defaultColors['primary-focus'],
        1
      )}`,
    },
    // TODO TEST IN MOZILLA
    _focusVisible: {
      borderRadius: '3px',
      boxShadow: `0 0 0 3px ${convertHexToRGBA(
        defaultColors['primary-focus'],
        1
      )}`,
    },
  },
  // CHECK IF WE NEED LARGE, BOLD AND OTHER VALUES
  sizes: {
    s: {
      textStyle: 'text-body-meta-medium',
    },
    m: {
      textStyle: 'text-body-medium',
    },
  },
};
