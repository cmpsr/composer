import { ComponentStyleConfig, cssVar } from '@chakra-ui/react';

const $size = cssVar('stepper-indicator-size');
const $iconSize = cssVar('stepper-icon-size');

export const Stepper: ComponentStyleConfig = {
  parts: ['stepper', 'step', 'title', 'description', 'indicator', 'separator', 'icon', 'number'],
  baseStyle: {
    stepper: {
      display: 'flex',
      gap: 0,
    },
    step: {
      gap: 0,
    },
    separator: {
      '&[data-orientation=horizontal]': {
        width: '100%',
        height: '2px',
        marginStart: 0,
      },
    },
    title: {
      fontSize: '0.75rem',
      fontWeight: 700,
    },
    description: {
      fontSize: '0.75rem',
      fontWeight: 400,
    },
    number: {
      fontSize: '0.875rem',
    },
  },
  sizes: {
    s: {
      stepper: {
        [$size.variable]: '1.25rem',
        [$iconSize.variable]: '0.75rem',
      },
    },
  },
  defaultProps: {
    size: 's',
    variant: 'horizontal',
  },
};
