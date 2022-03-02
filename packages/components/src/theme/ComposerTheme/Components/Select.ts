import { ComponentStyleConfig } from '@chakra-ui/theme';
import { PartsStyleFunction, PartsStyleInterpolation } from '@chakra-ui/theme-tools';
import { selectAnatomy as parts } from '@chakra-ui/anatomy';

const placeholderWasSelected = (placeholder, value) => placeholder && (!value || value === '');

const getDefaultTextColor = (placeholder, value) =>
  placeholderWasSelected(placeholder, value) ? 'text-secondary' : 'text-primary';

const sizes: Record<string, PartsStyleInterpolation> = {
  l: ({ theme }) => ({
    field: {
      py: '0.75rem',
      pl: '1rem',
      pr: '3rem',
      height: '3rem',
      ...theme.textStyles['text-body-regular'],
    },
    icon: {
      right: '1rem',
    },
  }),
  m: ({ theme }) => ({
    field: {
      py: '0.5rem',
      pl: '0.75rem',
      pr: '2.75rem',
      height: '2.5rem',
      ...theme.textStyles['text-body-regular'],
    },
    icon: {
      right: '0.75rem'
    }
  }),
  s: ({ theme }) => ({
    field: {
      py: '0.375rem',
      pl: '0.75rem',
      pr: '2.75rem',
      height: '2rem',
      ...theme.textStyles['text-body-meta-regular'],
    },
    icon: {
      right: '0.75rem'
    }
  }),
};

const baseStyle: PartsStyleFunction<typeof parts> = ({ size, value, placeholder }) => ({
  icon: {
    boxSize: '1.25rem',
    '> svg': {
      // Icons are styled with inline style, which has highest priority, so !important is required to be able to override them.
      boxSize: '1.25rem !important',
    },
    color: 'text-primary',
    _disabled: {
      color: 'text-disabled',
      opacity: 1,
    },
  },
  field: {
    backgroundColor: 'background-action-default',
    // Using borderColor will not override the border-color set in the theme, as the border property has higher priority
    border: '0.0625rem solid var(--chakra-colors-ui-element-outline-default)',
    boxShadow: 'none',
    color: getDefaultTextColor(placeholder, value),
    borderRadius: '0.375rem',
    _hover: {
      backgroundColor: 'background-action-hover',
      borderWidth: '0.0625rem',
      borderColor: 'ui-element-outline-active',
    },
    _focus: {
      backgroundColor: 'background-action-hover',
      borderColor: 'ui-element-outline-default',
      boxShadow: '0 0 0 0.1875rem var(--chakra-colors-primary-focus)',
    },
    _disabled: {
      backgroundColor: 'background-action-disabled',
      borderWidth: '0.0625rem',
      borderColor: 'ui-element-outline-disabled',
      opacity: 1,
      color: 'text-disabled',
    },
    _invalid: {
      borderColor: 'transparent',
      boxShadow: '0 0 0 0.125rem var(--chakra-colors-alert-error-default)',
    },
  },
});

const flushedSpacing = {
  l: { paddingInlineStart: '1rem', pr: '2.75rem', pt: '0.625rem' },
  m: { paddingInlineStart: '0.75rem', pr: '2.5rem', py: '0.5rem' },
  s: { paddingInlineStart: '0.75rem', pr: '2.5rem' },
};

const flushedStyle: PartsStyleFunction<typeof parts> = ({ size, value, placeholder }) => ({
  field: {
    bg: 'background-action-default',
    border: 'none',
    borderBottom: '0.063rem solid var(--chakra-colors-ui-element-outline-default)',
    color: getDefaultTextColor(placeholder, value),
    ...flushedSpacing[size],
    _hover: {
      bg: 'background-action-hover',
      borderBottom: '0.063rem solid var(--chakra-colors-ui-element-outline-active)',
    },
    _focus: {
      border: 'none',
      borderBottom: '0.063rem solid var(--chakra-colors-ui-element-outline-default)',
      bg: 'background-action-default',
      boxShadow: '0 0.1875rem 0 0 var(--chakra-colors-primary-focus)',
    },
    _disabled: {
      backgroundColor: 'background-action-disabled',
      borderWidth: '0.063rem',
      borderColor: 'ui-element-outline-disabled',
      opacity: 1,
      color: placeholderWasSelected(placeholder, value) ? 'text-disabled' : 'text-secondary',
    },
    _invalid: {
      border: 'none',
      boxShadow: '0 0.125rem 0 0 var(--chakra-colors-alert-error-default)',
    },
  },
});

export const Select: ComponentStyleConfig = {
  baseStyle,
  sizes,
  variants: {
    outline: baseStyle,
    flushed: flushedStyle,
  },
  defaultProps: {
    size: 'm',
    variant: 'outline',
  },
};
