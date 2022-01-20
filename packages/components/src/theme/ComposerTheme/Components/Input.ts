import { ComponentStyleConfig } from '@chakra-ui/theme';
import {
  PartsStyleObject,
  SystemStyleInterpolation,
  SystemStyleObject,
} from '@chakra-ui/theme-tools';
import { inputAnatomy as parts } from '@chakra-ui/anatomy';
import { inputStyles } from 'theme/ComposerTheme/styles';

const sizes: Record<string, PartsStyleObject<typeof parts>> = {
  l: {
    field: { ...inputStyles.large },
  },
  m: {
    field: { ...inputStyles.medium },
  },
  s: {
    field: { ...inputStyles.small },
  },
};

const baseStyle: SystemStyleInterpolation = {
  field: {
    borderRadius: '0.375rem',
    color: 'text-primary',
    backgroundColor: 'background-action-default',
    border: 'solid 0.063rem var(--chakra-colors-ui-element-outline-default)',
    _placeholder: {
      color: 'text-secondary',
      textStyle: 'text-body-regular',
    },
  },
};

export const Input: ComponentStyleConfig = {
  baseStyle,
  defaultProps: {
    size: 'm',
  },
  sizes,
  variants: {
    outline: baseStyle,
  },
};
