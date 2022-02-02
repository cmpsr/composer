import { ComponentStyleConfig } from '@chakra-ui/theme';

export const TextPairing: ComponentStyleConfig = {
  parts: ['label', 'subLabel'],
  variants: {
    'textpairing-header-4XL': {
      label: {
        variant: 'text-header-4XL',
      },
      subLabel: {
        variant: 'text-body-display-S',
      },
      columnGap: {
        sm: '1.25rem',
        md: '1rem',
      },
    },
    'textpairing-header-3XL': {
      label: {
        variant: 'text-header-3XL',
      },
      subLabel: {
        variant: 'text-body-display-S',
      },
      columnGap: {
        sm: '1rem',
        md: '1rem',
      },
    },
    'textpairing-header-2XL': {
      label: {
        variant: 'text-header-2XL',
      },
      subLabel: {
        variant: 'text-body-display-S',
      },
      columnGap: {
        sm: '0.75rem',
        md: '1rem',
      },
    },
    'textpairing-header-XL': {
      label: {
        variant: 'text-header-XL',
      },
      subLabel: {
        variant: 'text-body-regular',
      },
      columnGap: {
        sm: '0.5rem',
        md: '0.5rem',
      },
    },
    'textpairing-header-L': {
      label: {
        variant: 'text-header-L',
      },
      subLabel: {
        variant: 'text-body-regular',
      },
      columnGap: {
        sm: '0.25rem',
        md: '0.5rem',
      },
    },
    'textpairing-header-M': {
      label: {
        variant: 'text-header-M',
      },
      subLabel: {
        variant: 'text-body-regular',
      },
      columnGap: {
        sm: '0.25rem',
        md: '0.25rem',
      },
    },
    'textpairing-body-display-2XL': {
      label: {
        variant: 'text-body-display-2XL',
      },
      subLabel: {
        variant: 'text-body-large-regular',
      },
      columnGap: {
        sm: '1rem',
        md: '1rem',
      },
    },
    'textpairing-body-display-XL': {
      label: {
        variant: 'text-body-display-XL',
      },
      subLabel: {
        variant: 'text-body-large-regular',
      },
      columnGap: {
        sm: '0.75rem',
        md: '0.75rem',
      },
    },
    'textpairing-body-display-L': {
      label: {
        variant: 'text-body-display-L',
      },
      subLabel: {
        variant: 'text-body-large-regular',
      },
      columnGap: {
        sm: '0.75rem',
        md: '0.75rem',
      },
    },
    'textpairing-body-display-M': {
      label: {
        variant: 'text-body-display-M',
      },
      subLabel: {
        variant: 'text-body-regular',
      },
      columnGap: {
        sm: '0.5rem',
        md: '0.5rem',
      },
    },
    'textpairing-body-display-S': {
      label: {
        variant: 'text-body-display-S',
      },
      subLabel: {
        variant: 'text-body-regular',
      },
      columnGap: {
        sm: '0.5rem',
        md: '0.5rem',
      },
    },
    'textpairing-body-bold': {
      label: {
        variant: 'text-body-bold',
      },
      subLabel: {
        variant: 'text-body-regular',
      },
      columnGap: {
        sm: '0.25rem',
        md: '0.25rem',
      },
    },
    'textpairing-body-medium': {
      label: {
        variant: 'text-body-medium',
      },
      subLabel: {
        variant: 'text-body-regular',
      },
      columnGap: {
        sm: '0.25rem',
        md: '0.25rem',
      },
    },
    'textpairing-body-regular-meta': {
      label: {
        variant: 'text-body-regular',
      },
      subLabel: {
        variant: 'text-body-meta-regular',
      },
      columnGap: {
        sm: '0.25rem',
        md: '0.25rem',
      },
    },
    'textpairing-body-bold-meta': {
      label: {
        variant: 'text-body-bold',
      },
      subLabel: {
        variant: 'text-body-meta-regular',
      },
      columnGap: {
        sm: '0.25rem',
        md: '0.25rem',
      },
    },
    'textpairing-body-medium-meta': {
      label: {
        variant: 'text-body-medium',
      },
      subLabel: {
        variant: 'text-body-meta-regular',
      },
      columnGap: {
        sm: '0.25rem',
        md: '0.25rem',
      },
    },
    'textpairing-body-meta-medium': {
      label: {
        variant: 'text-body-meta-medium',
      },
      subLabel: {
        variant: 'text-body-meta-regular',
      },
      columnGap: {
        sm: '0.125rem',
        md: '0.125rem',
      },
    },
    'textpairing-body-meta-bold': {
      label: {
        variant: 'text-body-meta-bold',
      },
      subLabel: {
        variant: 'text-body-meta-regular',
      },
      columnGap: {
        sm: '0.125rem',
        md: '0.125rem',
      },
    },
    'textpairing-popover-title': {
      label: {
        color: 'text-primary',
        variant: 'text-header-M',
      },
      subLabel: {
        color: 'text-secondary',
        variant: 'text-body-regular',
      },
      columnGap: {
        sm: '0.25rem',
        md: '0.25rem',
      },
    },
  },
  defaultProps: {
    variant: 'textpairing-body-bold',
  },
};
