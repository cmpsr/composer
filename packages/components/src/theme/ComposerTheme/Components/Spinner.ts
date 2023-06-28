import { keyframes } from '@chakra-ui/system';
import { ComponentStyleConfig } from '@chakra-ui/theme';
import { transparentize } from '@chakra-ui/theme-tools';

const spin = keyframes({
  '0%': {
    transform: 'rotate(0deg)',
  },
  '100%': {
    transform: 'rotate(360deg)',
  },
});
const speed = '0.70s';

export const Spinner: ComponentStyleConfig = {
  baseStyle: {
    animation: `${spin} ${speed} linear infinite`,
  },
  sizes: {
    xs: {
      px: '0.75rem',
      py: '0.75rem',
    },
    s: {
      px: '0.875rem',
      py: '0.875rem',
    },
  },
  variants: {
    accent: {
      borderColor: 'accent-default',
      borderLeftColor: transparentize('accent-default', 0.3),
      borderBottomColor: transparentize('accent-default', 0.3),
    },
    primary: {
      borderColor: 'primary-default',
      borderLeftColor: transparentize('primary-default', 0.3),
      borderBottomColor: transparentize('primary-default', 0.3),
    },
    ghost: {
      borderColor: 'text-button-ghost',
      borderLeftColor: transparentize('text-button-ghost', 0.3),
      borderBottomColor: transparentize('text-button-ghost', 0.3),
    },
  },
  defaultProps: {
    size: 's',
    variant: 'primary',
    thickness: '0.125rem',
  },
};
