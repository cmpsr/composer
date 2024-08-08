import { ComponentStyleConfig } from '@chakra-ui/theme';
import { StyleFunctionProps, SystemStyleObject, transparentize } from '@chakra-ui/theme-tools';
import { linkVariants } from '@components';

const hoverable = `@media (pointer: fine)`;

const ghostButton = {
  color: 'text-button-transparent',
  backgroundColor: 'transparent',
  loading: {
    borderColor: 'text-button-transparent',
    borderBottomColor: transparentize('text-button-transparent', 0.3),
    borderLeftColor: transparentize('text-button-transparent', 0.3),
  },
  _loading: {
    backgroundColor: 'background-action-disabled',
    _hover: {
      backgroundColor: 'background-action-disabled',
    },
  },
  _disabled: {
    color: transparentize('text-button-transparent', 0.6),
    opacity: 1,
    backgroundColor: 'transparent',
  },
  _hover: {
    [hoverable]: {
      backgroundColor: 'background-action-hover',
    },
    _disabled: {
      color: transparentize('text-button-transparent', 0.6),
      opacity: 1,
    },
  },
  _focusVisible: {
    backgroundColor: 'background-action-hover',
    boxShadow: `0 0 0 0.1875rem var(--chakra-colors-primary-focus)`,
  },
  _pressed: {
    backgroundColor: 'background-action-pressed',
  },
  _active: {
    backgroundColor: 'background-action-pressed',
  },
};

const generateButton = (color: string, textColor?: string) => {
  const _disabled = {
    backgroundColor: `${color}-disabled`,
    opacity: 1,
    color: transparentize(`text-button-${textColor || color}`, 0.6),
  };

  let loadingStyles = {
    borderColor: `${color}-default`,
    borderBottomColor: transparentize(`${color}-default`, 0.3),
    borderLeftColor: transparentize(`${color}-default`, 0.3),
  };

  if (color === 'secondary' || color === 'alert-error') {
    loadingStyles = {
      borderColor: 'text-light',
      borderBottomColor: transparentize('text-light', 0.3),
      borderLeftColor: transparentize('text-light', 0.3),
    };
  }

  return {
    color: `text-button-${textColor || color}`,
    backgroundColor: `${color}-default`,
    loading: loadingStyles,
    _disabled,
    _hover: {
      [hoverable]: {
        backgroundColor: `${color}-hover`,
      },
      _disabled,
    },
    _focusVisible: {
      backgroundColor: `${color}-hover`,
      boxShadow: `0 0 0 0.1875rem var(--chakra-colors-${color}-focus)`,
    },
    _pressed: {
      backgroundColor: `${color}-pressed`,
    },
    _active: {
      backgroundColor: `${color}-pressed`,
    },
  };
};

const generateAltButton = (color: string) => {
  const _disabled = {
    backgroundColor: 'background-action-disabled',
    opacity: 1,
    color: transparentize(`text-link-${color}-default`, 0.6),
    border: `1px solid ${color}-disabled`,
  };

  return {
    position: 'relative',
    backgroundColor: 'background-action-default',
    color: `text-link-${color}-default`,
    loading: {
      borderColor: 'primary-default',
      borderBottomColor: transparentize('primary-default', 0.3),
      borderLeftColor: transparentize('primary-default', 0.3),
    },
    _disabled,
    _hover: {
      [hoverable]: {
        backgroundColor: 'background-action-hover',
        color: `text-link-${color}-hover`,
        _disabled,
        _before: {
          border: `1px solid var(--chakra-colors-${color}-hover)`,
        },
      },
    },
    _focusVisible: {
      backgroundColor: 'background-action-default',
      boxShadow: `0 0 0 0.1875rem var(--chakra-colors-${color}-focus)`,
    },
    _pressed: {
      backgroundColor: 'background-action-pressed',
      _before: {
        border: `1px solid var(--chakra-colors-${color}-pressed)`,
      },
    },
    _active: {
      backgroundColor: 'background-action-pressed',
      _before: {
        border: `1px solid var(--chakra-colors-${color}-pressed)`,
      },
    },
    // Safari patch - If the targeted element already has a border-radius, the outline will not follow it: It will be a square.
    _before: {
      content: '""',
      position: 'absolute',
      top: '-1px',
      right: '-1px',
      bottom: '-1px',
      left: '-1px',
      border: `1px solid var(--chakra-colors-${color}-default)`,
      borderRadius: 'radii-button',
    },
  };
};

const getLinkVariants = () =>
  linkVariants.reduce(
    (prev, variant) => ({
      ...prev,
      [variant]: (params: StyleFunctionProps) => {
        const variantValue = params.theme.components.Link.variants[variant];
        return typeof variantValue === 'function' ? variantValue(params) : variantValue;
      },
    }),
    {}
  );

const getTextStyleProperties = (textStyle: SystemStyleObject) => {
  const { fontSize, fontWeight, letterSpacing, lineHeight, textDecoration, fontFamily } = textStyle;
  return {
    fontSize,
    fontWeight,
    letterSpacing,
    lineHeight,
    textDecoration,
    fontFamily,
  };
};

export const Button: ComponentStyleConfig = {
  baseStyle: {
    borderRadius: 'radii-button',
  },
  sizes: {
    xs: ({ theme }) => ({
      ...getTextStyleProperties(theme.textStyles['text-body-floating-label-medium']),
      px: 'spacer-button-x-XS',
      py: 'spacer-button-y-XS',
      loading: {
        width: '0.75rem',
        height: '0.75rem',
        padding: 0,
      },
      columnGap: 'spacer-button-gap-XS',
    }),
    s: ({ theme }) => ({
      ...getTextStyleProperties(theme.textStyles['text-body-meta-medium']),
      px: 'spacer-button-x-S',
      py: 'spacer-button-y-S',
      loading: {
        width: '0.75rem',
        height: '0.75rem',
        padding: 0,
      },
      columnGap: 'spacer-button-gap-S',
    }),
    m: ({ theme }) => ({
      ...getTextStyleProperties(theme.textStyles['text-body-medium']),
      px: 'spacer-button-x-M',
      py: 'spacer-button-y-M',
      loading: {
        width: '1rem',
        height: '1rem',
        padding: 0,
      },
      columnGap: 'spacer-button-gap-M',
    }),
    l: ({ theme }) => ({
      ...getTextStyleProperties(theme.textStyles['text-body-large-medium']),
      px: 'spacer-button-x-L',
      py: 'spacer-button-y-L',
      loading: {
        width: '1rem',
        height: '1rem',
        padding: 0,
      },
      columnGap: 'spacer-button-gap-L',
    }),
  },
  variants: {
    accent: generateButton('accent'),
    primary: generateButton('primary'),
    secondary: generateButton('secondary'),
    'primary-alt': generateAltButton('primary'),
    'secondary-alt': generateAltButton('secondary'),
    destroy: generateButton('alert-error', 'alert'),
    ghost: ghostButton,
    ...getLinkVariants(),
  },
  defaultProps: {
    size: 'm',
    variant: 'primary',
  },
};
