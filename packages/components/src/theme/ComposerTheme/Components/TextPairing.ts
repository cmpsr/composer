import { ComponentStyleConfig } from '@chakra-ui/theme';

export const TextPairing: ComponentStyleConfig = {
  parts: ['label', 'subLabel'],
  variants: {
    'typepairing-font-header-4XL': {
      label: {
        variant: 'font-header-4XL',
      },
      subLabel: {
        variant: 'font-body-display-S',
      },
      columnGap: {
        sm: '1.25rem',
        md: '1rem',
      },
    },
  },
};
