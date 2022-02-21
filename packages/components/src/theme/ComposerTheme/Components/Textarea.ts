import { ComponentStyleConfig } from '@chakra-ui/react';
import { inputStyles } from '../styles';

const baseStyle = {
  bg: 'background-action-default',
  color: 'text-primary',
  borderRadius: '0.375rem',
  _placeholder: {
    color: 'text-secondary',
  },
  _hover: {
    bg: 'background-action-hover',
    borderWidth: '0.063rem',
    borderColor: 'ui-element-outline-active',
  },
  _disabled: {
    bg: 'background-action-disabled',
    borderColor: 'ui-element-outline-disabled',
    color: 'text-disabled',
    opacity: 1,
    _placeholder: {
      color: 'text-disabled',
    },
  },
  _focus: {
    bg: 'background-action-default',
    borderColor: 'ui-element-outline-default',
    boxShadow: '0 0 0 0.188rem var(--chakra-colors-primary-focus)',
  },
  _invalid: {
    border: 'none',
    boxShadow: '0 0 0 0.125rem var(--chakra-colors-alert-error-default)',
  },
};

const textStyles = {
  large: 'text-body-regular',
  medium: 'text-body-regular',
  small: 'text-body-meta-regular',
};

const spacing = {
  large: {
    pl: '1rem',
    pr: '1.625rem',
  },
  small: { padding: '0.75rem' },
  medium: { padding: '0.75rem' },
};

const calculateSize = (size: string) => {
  return ({ theme }) => ({
    ...inputStyles[size],
    ...theme.textStyles[textStyles[size]],
    ...spacing[size],
  });
};

export const Textarea: ComponentStyleConfig = {
  baseStyle,
  variants: {
    outline: baseStyle,
    flushed: {
      bg: 'background-action-default',
      borderBottom: '0.063rem solid var(--chakra-colors-ui-element-outline-active)',
      _hover: {
        bg: 'background-action-hover',
        border: 'none',
        borderBottom: '0.063rem solid var(--chakra-colors-ui-element-outline-active)',
      },
      _focus: {
        border: 'none',
        borderBottom: '0.063rem solid var(--chakra-colors-ui-element-outline-active)',
        bg: 'background-action-default',
        boxShadow: '0 0.188rem 0 0 var(--chakra-colors-primary-focus)',
      },
      _invalid: {
        borderBottom: '0.063rem solid var(--chakra-colors-ui-element-outline-active)',
        boxShadow: '0 0.125rem 0 0 var(--chakra-colors-alert-error-default)',
      },
      _disabled: {
        color: 'text-secondary',
      },
    },
  },
  sizes: {
    s: calculateSize('small'),
    m: calculateSize('medium'),
    l: calculateSize('large'),
  },
  defaultProps: {
    size: 's',
    variant: 'outline',
  },
};
