import { numberInputAnatomy as parts } from '@chakra-ui/anatomy';
import { ComponentMultiStyleConfig, SystemStyleObject } from '@chakra-ui/react';
import { PartsStyleFunction, SystemStyleFunction } from '@chakra-ui/theme-tools';

const baseStyleRoot: SystemStyleObject = {
  bg: 'background-action-default',
  color: 'text-primary',
};

const flushedStyleRoot: SystemStyleObject = {
  bg: 'background-action-default',
};

const fieldDisabledStyle = {
  bg: 'background-action-disabled',
  borderColor: 'ui-element-outline-disabled',
  opacity: 1,
  color: 'text-secondary',
};

const baseStyleField: SystemStyleObject = {
  borderColor: 'none',
  border: '0.0625rem solid var(--chakra-colors-ui-element-outline-default)',
  borderRadius: '0.375rem',
  _placeholder: {
    color: 'text-disabled',
  },
  _hover: {
    borderColor: 'ui-element-outline-default',
    bg: 'background-action-hover',
  },
  _focus: {
    bg: 'background-action-default',
    borderColor: 'none',
    border: '0.0625rem solid var(--chakra-colors-ui-element-outline-default)',
    boxShadow: '0 0 0 0.1875rem var(--chakra-colors-primary-focus)',
  },
  _invalid: {
    boxShadow: 'none',
    border: '0.125rem solid',
    borderColor: 'var(--chakra-colors-alert-error-default)',
  },
  _disabled: {
    ...fieldDisabledStyle,
    _hover: fieldDisabledStyle,
    _placeholder: {
      color: 'text-disabled',
    },
  },
};

const flushedStyleField: SystemStyleObject = {
  border: 'none',
  borderBottom: '0.0625rem solid var(--chakra-colors-ui-element-outline-default)',
  _focus: {
    border: 'none',
    borderBottom: '0.0625rem solid var(--chakra-colors-ui-element-outline-default)',
    bg: 'background-action-default',
    boxShadow: '0 0.1875rem 0 0 var(--chakra-colors-primary-focus)',
  },
  _invalid: {
    border: 'none',
    boxShadow: '0 0.125rem 0 0 var(--chakra-colors-alert-error-default)',
  },
};

// Stepper Group does not allow to add _invalid and _disabled properties directly, so we add them manually
const stepperGroupBorders = {
  _invalid: {
    borderLeft: '0.0625rem solid var(--chakra-colors-ui-element-outline-disabled)',
  },
  _disabled: {
    border: '0.0625rem solid  var(--chakra-colors-alert-error-default)',
    borderRightRadius: '0.3125rem',
  },
};

const baseStyleStepperGroup: SystemStyleFunction = ({ isDisabled, isInvalid }) => ({
  borderLeft: '0.0625rem solid var(--chakra-colors-ui-element-outline-default)',
  ...stepperGroupBorders[isDisabled && '_invalid'],
  ...stepperGroupBorders[isInvalid && '_disabled'],
});

const flushedStyleStepperGroup: SystemStyleFunction = ({ isInvalid }) => ({
  border: 0,
  margin: 0,
  height: isInvalid ? '100%' : 'calc(100% - 0.0625rem)',
});

const baseStyleStepper: SystemStyleObject = {
  bg: 'background-action-active',
  borderLeft: 0,
  borderColor: 'ui-element-outline-default',
  _active: {
    bg: 'background-action-pressed',
    color: 'text-secondary',
  },
  _disabled: {
    bg: 'background-action-disabled',
    color: 'text-disabled',
  },
  _first: {
    borderTopEndRadius: '0.3125rem',
    opacity: 1,
  },
  _last: {
    opacity: 1,
    borderBottomEndRadius: '0.3125rem',
    borderTopWidth: '0.0625rem',
    mt: '-0.0625rem',
    _disabled: {
      borderTopColor: 'var(--chakra-colors-ui-element-outline-disabled)',
    },
  },
};

const flushedStyleStepper: SystemStyleObject = {
  borderRadius: 0,
  _first: {
    borderTopEndRadius: 0,
  },
  _last: {
    borderBottomEndRadius: 0,
  },
};

const baseStyle: PartsStyleFunction<typeof parts> = (props) => ({
  root: baseStyleRoot,
  field: baseStyleField,
  stepperGroup: baseStyleStepperGroup(props),
  stepper: baseStyleStepper,
});

const flushedStyle: PartsStyleFunction<typeof parts> = (props) => ({
  root: flushedStyleRoot,
  field: flushedStyleField,
  stepperGroup: flushedStyleStepperGroup(props),
  stepper: flushedStyleStepper,
});

const calculatePaddings = {
  s: {
    py: '0.375rem',
    pl: '0.75rem',
    pr: '2.3125rem',
  },
  m: {
    py: '0.5rem',
    pl: '0.75rem',
    pr: '2.3125rem',
  },
  l: {
    py: '0.75rem',
    pl: '1rem',
    pr: '2.5625rem',
  },
};

const textStyles = {
  s: 'text-body-meta-regular',
  m: 'text-body-regular',
  l: 'text-body-regular',
};

const calculateSize = (size: string) => {
  return {
    root: {
      textStyle: textStyles[size],
    },
    field: {
      paddingStart: 0,
      paddingInlineStart: 0,
      paddingEnd: 0,
      paddingInlineEnd: 0,
      ...calculatePaddings[size],
      _placeholder: {
        textStyle: textStyles[size],
      },
    },
  };
};

const sizes = {
  s: calculateSize('s'),
  m: calculateSize('m'),
  l: calculateSize('l'),
};

export const NumberInput: ComponentMultiStyleConfig = {
  parts: parts.keys,
  baseStyle,
  variants: {
    outline: baseStyle,
    flushed: flushedStyle,
  },
  sizes,
  defaultProps: {
    size: 'm',
    variant: 'outline',
  },
};
