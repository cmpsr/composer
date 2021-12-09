import { keyframes } from '@chakra-ui/system';
import { ComponentStyleConfig } from '@chakra-ui/theme';

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
      borderLeftColor: 'background-container-secondary',
      borderBottomColor: 'background-container-secondary',
    },
    primary: {
      borderColor: 'primary-ui-default',
      borderLeftColor: 'background-container-secondary',
      borderBottomColor: 'background-container-secondary',
    },
  },
  defaultProps: {
    size: 's',
    variant: 'primary',
  },
};
