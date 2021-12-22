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
      px: 'spacer-3',
      py: 'spacer-3',
    },
    s: {
      px: 'spacer-4',
      py: 'spacer-4',
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
  },
  defaultProps: {
    size: 's',
    variant: 'primary',
  },
};
