import { ComponentStyleConfig } from '@chakra-ui/react';
import { inputStyles } from '../styles';

const textStyles = {
  l: 'text-body-regular',
  m: 'text-body-regular',
  s: 'text-body-meta-regular',
};

const spacing = {
  large: { px: '1rem' },
  small: { padding: '0.75rem' },
  medium: { padding: '0.75rem' },
};

const generateSize = (size: string) => {
  return ({ theme }) => ({
    ...inputStyles[size],
    ...theme.textStyles[textStyles[size]],
    ...spacing[size],
  });
};

const baseStyle = {
  bg: 'background-action-default',
  color: 'text-primary',
  borderRadius: '0.375rem',
  _placeholder: {
    color: 'text-secondary',
  },
  _hover: {
    bg: 'background-action-hover',
    borderWidth: '0.0625rem',
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
    boxShadow: '0 0 0 0.1875rem var(--chakra-colors-primary-focus)',
  },
  _invalid: {
    border: 'none',
    boxShadow: '0 0 0 0.125rem var(--chakra-colors-alert-error-default)',
  },
};

const flushed = {
  bg: 'background-action-default',
  paddingInlineStart: '0.75rem',
  paddingInlineEnd: '0.75rem',
  borderBottom: '0.0625rem solid var(--chakra-colors-ui-element-outline-active)',
  _hover: {
    bg: 'background-action-hover',
    border: 'none',
    borderBottom: '0.0625rem solid var(--chakra-colors-ui-element-outline-active)',
  },
  _focus: {
    borderBottom: '0.0625rem solid var(--chakra-colors-ui-element-outline-active)',
    bg: 'background-action-default',
    boxShadow: '0 0.1875rem 0 0 var(--chakra-colors-primary-focus)',
  },
  _invalid: {
    borderBottom: '0.0625rem solid var(--chakra-colors-ui-element-outline-active)',
    boxShadow: '0 0.125rem 0 0 var(--chakra-colors-alert-error-default)',
  },
  _disabled: {
    color: 'text-secondary',
  },
};

export const Textarea: ComponentStyleConfig = {
  baseStyle,
  variants: {
    outline: baseStyle,
    flushed,
  },
  sizes: {
    s: generateSize('s'),
    m: generateSize('m'),
    l: generateSize('l'),
  },
  defaultProps: {
    size: 'm',
    variant: 'outline',
  },
};
