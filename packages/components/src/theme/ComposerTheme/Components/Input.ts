import { ComponentStyleConfig } from '@chakra-ui/theme';
import { inputStyles } from '../styles';

const textStyles = {
  large: 'text-body-regular',
  medium: 'text-body-regular',
  small: 'text-body-meta-regular',
};

const iconContainerStyles = {
  large: {
    padding: '0.75rem 1rem',
  },
  medium: {
    padding: '0.625rem 0.75rem',
  },
  small: {
    padding: '0.625rem 0.75rem',
  },
};

export const iconStyles = {
  disabled: {
    color: 'text-disabled',
  },
  withContent: {
    color: 'text-primary',
  },
};

const fieldSpacing = {
  large: {
    paddingLeft: '3rem',
  },
  medium: {
    paddingLeft: '2.5rem',
  },
  small: {
    paddingLeft: '2.5rem',
  },
};

export const labelStyles = {
  backgroundColor: 'background-static',
  transitionProperty: 'var(--chakra-transition-property-common)',
  transitionDuration: 'var(--chakra-transition-duration-normal)',
  sizes: {
    large: {
      paddingX: '1rem',
      paddingY: '0.75rem',
    },
    medium: {
      paddingX: '1rem',
      paddingY: '0.5rem',
    },
    small: {
      paddingX: '0.75rem',
      paddingY: '0.375rem',
    },
  },
  variants: {
    outline: {
      invalid: {
        boxShadow: '0 0 0 0.125rem var(--chakra-colors-alert-error-default)',
        border: '0px solid transparent',
        borderColor: 'transparent',
        position: 'relative',
        zIndex: 1,
      },
      disabled: {
        color: 'text-disabled',
        borderColor: 'ui-element-outline-disabled',
        border: 'solid 0.063rem var(--chakra-colors-ui-element-outline-disabled)',
      },
      hovered: {
        borderColor: 'ui-element-outline-active',
        border: 'solid 0.063rem var(--chakra-colors-ui-element-outline-active)',
      },
    },
    flushed: {
      invalid: {},
      disabled: {},
      hovered: {},
    },
  },
};

export const inputGroupStyles = {
  outline: {
    invalid: {
      boxShadow: '0 0 0 0.125rem var(--chakra-colors-alert-error-default)',
      border: '0px solid transparent',
      borderColor: 'transparent',
    },
    focused: {
      boxShadow: '0 0 0 0.188rem var(--chakra-colors-primary-focus)',
    },
  },
  flushed: {
    invalid: {
      boxShadow: '0 0.125rem 0 0 var(--chakra-colors-alert-error-default)',
      border: '0px solid transparent',
      borderColor: 'transparent',
      borderRadius: 0,
    },
    focused: {
      boxShadow: '0 0.188rem 0 0 var(--chakra-colors-primary-focus)',
      borderRadius: 0,
    },
    hovered: {},
  },
};

const calculateSize = (size: string, iconSize: string) => {
  return (props) => {
    return {
      elementContainer: {
        ...iconContainerStyles[size],
      },
      element: {
        boxSize: props.theme.components.Icon.sizes[iconSize].boxSize,
      },
      leftLabel: {
        ...labelStyles.sizes[size],
        ...props.theme.textStyles[textStyles[size]],
      },
      rightLabel: {
        ...labelStyles.sizes[size],
        ...props.theme.textStyles[textStyles[size]],
      },
      field: {
        ...props.theme.textStyles[textStyles[size]],
        ...inputStyles[size],
        withIcon: {
          ...fieldSpacing[size],
        },
        _placeholder: {
          ...props.theme.textStyles[textStyles[size]],
        },
      },
    };
  };
};

const sizes = {
  l: calculateSize('large', 'l'),
  m: calculateSize('medium', 'm'),
  s: calculateSize('small', 'm'),
};

export const getInputGroupStyle = (
  props: {
    isFocused?: boolean;
    isHovered?: boolean;
    isInvalid?: boolean;
    isDisabled?: boolean;
  },
  variant = 'outline'
) => {
  if (props.isInvalid) {
    return inputGroupStyles[variant].invalid;
  }

  if (props.isFocused) {
    return inputGroupStyles[variant].focused;
  }

  return {};
};

export const getLabelStyle = (
  props: {
    isFocused?: boolean;
    isHovered?: boolean;
    isInvalid?: boolean;
    isDisabled?: boolean;
  },
  variant = 'outline'
) => {
  if (props.isInvalid) {
    return labelStyles.variants[variant].invalid;
  }

  if (props.isDisabled) {
    return labelStyles.variants[variant].disabled;
  }

  if (props.isHovered) {
    return labelStyles.variants[variant].hovered;
  }

  return {};
};

export const getIconStyle = (props: { isDisabled?: boolean; hasContent?: boolean }) => {
  if (props.isDisabled) {
    return iconStyles.disabled;
  }

  if (props.hasContent) {
    return iconStyles.withContent;
  }

  return {};
};

const outlineStyle = (props) => {
  const inputGroupConditionalStyle = getInputGroupStyle(props);
  const labelConditionalStyle = getLabelStyle(props);
  const iconConditionalStyle = getIconStyle(props);

  return {
    inputGroup: {
      transitionProperty: 'var(--chakra-transition-property-common)',
      transitionDuration: 'var(--chakra-transition-duration-normal)',
      borderRadius: '0.375rem',
      ...inputGroupConditionalStyle,
    },
    leftLabel: {
      ...labelStyles,
      ...labelConditionalStyle,
      borderLeftRadius: '0.375rem',
    },
    rightLabel: {
      ...labelStyles,
      ...labelConditionalStyle,
      borderRightRadius: '0.375rem',
    },
    element: {
      color: 'text-secondary',
      ...iconConditionalStyle,
    },
    elementContainer: {
      height: '100%',
    },
    field: {
      borderRadius: '0.375rem',
      color: 'text-primary',
      backgroundColor: 'background-action-default',
      border: 'solid 0.063rem var(--chakra-colors-ui-element-outline-default)',
      _placeholder: {
        color: 'text-secondary',
        textStyle: 'text-body-regular',
      },
      _hover: {
        backgroundColor: 'background-action-hover',
        border: 'solid 0.063rem var(--chakra-colors-ui-element-outline-active)',
      },
      // We need to remove the focus state from the chakra input so we can add the border shadow to the full input group.
      _focus: {
        boxShadow: 'none',
        border: 'solid 0.063rem var(--chakra-colors-ui-element-outline-default)',
        borderColor: 'ui-element-outline-default',
      },
      _invalid: {
        boxShadow: 'none',
        border: 'none',
        borderColor: 'transparent',
      },
      _disabled: {
        _placeholder: {
          color: 'text-disabled',
        },
        color: 'text-secondary',
        backgroundColor: 'background-action-disabled',
        border: 'solid 0.063rem var(--chakra-colors-ui-element-outline-disabled)',
      },
    },
  };
};

export const flushedStyle = (props) => {
  const inputGroupConditionalStyle = getInputGroupStyle(props, 'flushed');
  const labelConditionalStyle = getLabelStyle(props, 'flushed');
  const iconConditionalStyle = getIconStyle(props);

  return {
    inputGroup: {
      borderRadius: 0,
      ...inputGroupConditionalStyle,
    },
    leftLabel: {
      ...labelStyles,
      ...labelConditionalStyle,
    },
    rightLabel: {
      ...labelStyles,
      ...labelConditionalStyle,
    },
    element: {
      color: 'text-secondary',
      ...iconConditionalStyle,
    },
    elementContainer: {
      height: '100%',
    },
    field: {
      color: 'text-primary',
      backgroundColor: 'background-action-default',
      border: 'none',
      borderColor: 'ui-element-outline-default',
      borderRadius: 0,
      _placeholder: {
        color: 'text-secondary',
        textStyle: 'text-body-regular',
      },
      _hover: {
        backgroundColor: 'background-action-hover',
        border: 'none',
        borderBottom: '0.063rem solid var(--chakra-colors-ui-element-outline-active)',
      },
      // We need to remove the focus state from the chakra input so we can add the border shadow to the full input group.
      _focus: {
        boxShadow: 'none',
        border: 'none',
        borderBottom: 'solid 0.063rem var(--chakra-colors-ui-element-outline-default)',
        borderColor: 'ui-element-outline-default',
      },
      _invalid: {
        boxShadow: 'none',
        border: 'none',
        borderColor: 'transparent',
      },
      _disabled: {
        _placeholder: {
          color: 'text-disabled',
        },
        color: 'text-secondary',
        backgroundColor: 'background-action-disabled',
        border: 'solid 0.063rem var(--chakra-colors-ui-element-outline-disabled)',
      },
    },
  };
};

export const Input: ComponentStyleConfig = {
  baseStyle: {
    field: {
      border: 'none',
      _hover: {
        boxShadow: 'none',
        border: 'none',
      },
      _focus: {
        boxShadow: 'none',
        border: 'none',
      },
    },
  },
  defaultProps: {
    size: 'm',
    variant: 'outline',
  },
  sizes,
  variants: {
    outline: outlineStyle,
    flushed: flushedStyle,
  },
};
