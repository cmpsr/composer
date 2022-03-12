import { numberInputAnatomy as parts } from '@chakra-ui/anatomy';
import { ComponentMultiStyleConfig } from '@chakra-ui/react';

const baseStyle = (props) => {
  return {
    root: {
      bg: 'background-action-default',
      color: 'text-primary',
    },
    field: {
      borderColor: 'none',
      border: '0.0625rem solid var(--chakra-colors-ui-element-outline-default)',
      borderRadius: '0.375rem',
      _placeholder: {
        color: 'text-secondary',
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
        bg: 'background-action-disabled',
        borderColor: 'ui-element-outline-disabled',
        opacity: 1,
        color: 'text-secondary',
        _placeholder: {
          color: 'text-disabled',
        },
      },
    },
    stepperGroup: {
      borderLeft: '0.0625rem solid var(--chakra-colors-ui-element-outline-default)',
      ...(() => {
        if (props.isDisabled) {
          return {
            borderLeft: '0.0625rem solid var(--chakra-colors-ui-element-outline-disabled)',
          };
        }
      })(),
      ...(() => {
        if (props.isInvalid) {
          return {
            border: '0.0625rem solid  var(--chakra-colors-alert-error-default)',
            borderRightRadius: '0.3125rem',
          };
        }
      })(),
    },
    stepper: {
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
    },
  };
};

const flushedStyle = props => ({
  root: {
    bg: 'background-action-default',
  },
  field: {
    border: 'none',
    borderBottom: '0.0625rem solid var(--chakra-colors-ui-element-outline-default)',
    ...(() => {
      if (props.size === 'l') {
        return {
          py: '0.71875rem'
        }
      }
    })(),
    _hover: {},
    _focus: {
      border: 'none',
      borderBottom: '0.0625rem solid var(--chakra-colors-ui-element-outline-default)',
      bg: 'background-action-default',
      boxShadow: '0 0.1875rem 0 0 var(--chakra-colors-primary-focus)',
    },
    _invalid: {
      border: 'none',
      boxShadow: 'none',
      borderBottom: '0.125rem solid var(--chakra-colors-alert-error-default)',
    },
  },
  stepperGroup: {
    border: 0,
    margin: 0,
  },
  stepper: {
    borderRadius: 0,
    _first: {
      borderTopEndRadius: 0,
    },
    _last: {
      borderBottomEndRadius: 0,
    },
  },
});

export const NumberInput: ComponentMultiStyleConfig = {
  parts: parts.keys,
  baseStyle,
  variants: {
    outline: baseStyle,
    flushed: flushedStyle,
  },
  sizes: {
    s: {
      root: {
        textStyle: 'text-body-meta-regular',
      },
      field: {
        paddingStart: 0,
        paddingInlineStart: 0,
        paddingEnd: 0,
        paddingInlineEnd: 0,
        py: '0.375rem',
        pl: '0.75rem',
        pr: '2.3125rem',
        textStyle: 'text-body-meta-regular',
        _placeholder: {
          textStyle: 'text-body-meta-regular',
        },
      },
    },
    m: {
      root: {
        textStyle: 'text-body-regular',
      },
      field: {
        paddingStart: 0,
        paddingInlineStart: 0,
        paddingEnd: 0,
        paddingInlineEnd: 0,
        py: '0.5rem',
        pl: '0.75rem',
        pr: '2.3125rem',
      }
    },
    l: {
      root: {
        textStyle: 'text-body-regular',
      },
      field: {
        paddingStart: 0,
        paddingInlineStart: 0,
        paddingEnd: 0,
        paddingInlineEnd: 0,
        py: '0.75rem',
        pl: '1rem',
        pr: '2.5625rem',
      }
    },
  },
  defaultProps: {
    size: 'l',
    variant: 'outline',
  },
};
