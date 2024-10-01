import { ComponentStyleConfig } from '@chakra-ui/react';
import { SystemStyleFunction } from '@chakra-ui/theme-tools';
import { inputStyles } from '../styles';

const textStyles = {
  l: 'text-body-regular',
  m: 'text-body-regular',
  s: 'text-body-meta-regular',
};

const spacing = {
  l: {
    py: '0.75rem',
    px: '1rem',
  },
  m: {
    padding: '0.75rem',
  },
  s: {
    padding: '0.75rem',
  },
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
  borderRadius: 'radii-input',
  _placeholder: {
    color: 'text-disabled',
  },
  _hover: {
    bg: 'background-action-hover',
    borderWidth: '0.0625rem',
    borderColor: 'ui-element-outline-hover',
  },
  _disabled: {
    bg: 'background-action-disabled',
    borderColor: 'ui-element-outline-disabled',
    color: 'text-secondary',
    opacity: 1,
    _placeholder: {
      color: 'text-disabled',
    },
  },
  _focus: {
    bg: 'background-action-default',
    borderColor: 'ui-element-outline-focus',
    boxShadow: '0 0 0 0.1875rem var(--chakra-colors-primary-focus)',
  },
  _invalid: {
    border: 'none',
    boxShadow: '0 0 0 0.125rem var(--chakra-colors-alert-error-default)',
  },
};

const flushedInlinePadding = {
  l: {
    paddingInlineStart: '1rem',
    paddingInlineEnd: '1rem',
  },
  m: {
    paddingInlineStart: '0.75rem',
    paddingInlineEnd: '0.75rem',
  },
  s: {
    paddingInlineStart: '0.75rem',
    paddingInlineEnd: '0.75rem',
  },
};

const generateFlushed: SystemStyleFunction = ({ size }) => ({
  bg: 'background-action-default',
  ...flushedInlinePadding[size],
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
});

export const Textarea: ComponentStyleConfig = {
  baseStyle,
  variants: {
    outline: baseStyle,
    flushed: generateFlushed,
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
