import type { SystemStyleObject, SystemStyleFunction } from '@chakra-ui/theme-tools';
import { ComponentStyleConfig } from '@chakra-ui/react';

const variantOutline: SystemStyleObject = {
  borderColor: 'ui-element-outline-default',
  bg: 'background-action-default',
  _hover: {
    borderColor: 'ui-element-outline-default',
    bg: 'background-action-hover',
  },
  _disabled: {
    bg: 'background-action-disabled',
    borderColor: 'ui-element-outline-disabled',
    opacity: 1,
    cursor: 'not-allowed',
    color: 'text-secondary',
    _placeholder: {
      color: 'text-disabled',
    },
  },
  _invalid: {
    borderColor: 'alert-error-default',
    boxShadow: 'none',
  },
  _focus: {
    bg: 'background-action-hover',
    borderWidth: '0.1875rem',
    borderColor: 'primary-focus',
    boxShadow: 'none',
  },
};

const variantFlushed: SystemStyleObject = {
  borderColor: 'ui-element-outline-default',
  borderRadius: 0,
  px: 0,
  bg: 'background-action-default',
  _hover: {
    borderColor: 'ui-element-outline-active',
    bg: 'background-action-hover',
  },
  _invalid: {
    borderColor: 'alert-error-default',
    boxShadow: `none`,
    borderBottomWidth: '0.125rem',
  },
  _focus: {
    borderColor: 'ui-element-outline-default',
    boxShadow: `0 0.1875rem 0 0 var(--chakra-colors-primary-focus)`,
  },
  _disabled: {
    bg: 'background-action-disabled',
    cursor: 'not-allowed',
    borderBottom: 'solid 0.0625 var(--chakra-colors-ui-element-outline-disabled)',
    color: 'text-secondary',
    _placeholder: {
      color: 'text-disabled',
    },
  },
};

const sizes: Record<string, SystemStyleFunction> = {
  s: ({ theme }) => ({
    ...theme.textStyles['text-body-meta-regular'],
    boxSize: '2rem',
  }),
  m: ({ theme }) => ({
    ...theme.textStyles['text-body-regular'],
    boxSize: '2.5rem',
  }),
  l: ({ theme }) => ({
    ...theme.textStyles['text-body-regular'],
    boxSize: '3rem',
  }),
};

const variants = {
  outline: variantOutline,
  flushed: variantFlushed,
};

export const PinInput: ComponentStyleConfig = {
  baseStyle: {
    borderRadius: '0.375rem',
    _placeholder: {
      color: 'text-secondary',
    },
  },
  sizes,
  variants,
  defaultProps: {
    size: 'l',
    variant: 'outline',
  },
};
