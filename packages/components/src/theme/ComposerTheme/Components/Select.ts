import { ComponentStyleConfig } from '@chakra-ui/theme';
import { PartsStyleObject } from '@chakra-ui/theme-tools';
import { selectAnatomy as parts } from '@chakra-ui/anatomy';
import { inputStyles } from 'theme/ComposerTheme/styles';

const iconSpacing = { paddingInlineEnd: '2rem' };

const sizes: Record<string, PartsStyleObject<typeof parts>> = {
  l: {
    field: { ...iconSpacing, ...inputStyles.large },
  },
  m: {
    field: { ...iconSpacing, ...inputStyles.medium },
  },
  s: {
    field: { ...iconSpacing, ...inputStyles.small },
  },
};

const baseStyle = {
  field: {
    backgroundColor: 'background-action-default',
    // Using borderColor won't override the border-color set in the theme, as the border property has higher priority
    border: '0.063rem solid var(--chakra-colors-ui-element-outline-default)',
    boxShadow: 'none',
    _hover: {
      backgroundColor: 'background-action-hover',
      borderWidth: '0.063rem',
      borderColor: 'ui-element-outline-active',
    },
    _focus: {
      backgroundColor: 'background-action-hover',
      borderColor: 'primary-focus',
      borderWidth: "0.188rem",
      boxShadow: 'none',
    },
  },
};

export const Select: ComponentStyleConfig = {
  baseStyle,
  defaultProps: {
    size: 'm',
    error: false,
  },
  sizes,
  variants: {
    outline: baseStyle,
  },
};
