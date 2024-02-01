import { cssVar } from '@chakra-ui/react';
import { ComponentStyleConfig } from '@chakra-ui/theme';
import { StyleFunctionProps, SystemStyleObject, transparentize } from '@chakra-ui/theme-tools';
import { linkVariants } from '@components';

const ghostButton = (hasLoading = true) => ({
  color: 'text-button-transparent',
  backgroundColor: 'transparent',
  ...(hasLoading && {
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
  }),
  _disabled: {
    color: transparentize('text-button-transparent', 0.6),
    opacity: 1,
    backgroundColor: 'transparent',
  },
  _hover: {
    backgroundColor: 'background-action-hover',
    _disabled: {
      color: transparentize('text-button-transparent', 0.6),
      opacity: 1,
    },
  },
  _focus: {
    backgroundColor: 'background-action-hover',
    boxShadow: `0 0 0 0.1875rem var(--chakra-colors-primary-focus)`,
  },
  _pressed: {
    backgroundColor: 'background-action-pressed',
  },
  _active: {
    backgroundColor: 'background-action-pressed',
  },
});

const generateButton = ({
  color,
  textColor,
  hasLoading = true,
}: {
  color: string;
  textColor?: string;
  hasLoading?: boolean;
}) => {
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
    ...(hasLoading && { loading: loadingStyles }),
    _disabled,
    _hover: {
      backgroundColor: `${color}-hover`,
      _disabled,
    },
    _focus: {
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

const generateAltButton = ({ color, hasLoading = true }: { color: string; hasLoading?: boolean }) => {
  const _disabled = {
    backgroundColor: 'background-action-disabled',
    opacity: 1,
    color: transparentize(`text-link-${color}-default`, 0.6),
    border: `1px solid ${color}-disabled`,
  };

  const loadingStyles = {
    loading: {
      borderColor: 'primary-default',
      borderBottomColor: transparentize('primary-default', 0.3),
      borderLeftColor: transparentize('primary-default', 0.3),
    },
  };

  return {
    position: 'relative',
    backgroundColor: 'background-action-default',
    color: `text-link-${color}-default`,
    ...(hasLoading && loadingStyles),
    _disabled,
    _hover: {
      backgroundColor: 'background-action-hover',
      _disabled,
    },
    _focus: {
      backgroundColor: 'background-action-hover',
      boxShadow: `0 0 0 0.1875rem var(--chakra-colors-${color}-focus)`,
    },
    _pressed: {
      backgroundColor: 'background-action-pressed',
    },
    _active: {
      backgroundColor: 'background-action-pressed',
    },
    // Safari patch - If the targeted element already has a border-radius, the outline will not follow it: It will be a square.
    _before: {
      content: '""',
      position: 'absolute',
      top: '-1px',
      right: '-1px',
      bottom: '-1px',
      left: '-1px',
      border: `1px solid var(--chakra-colors-text-link-${color}-default)`,
      borderRadius: 'radii-button',
    },
  };
};

const $spinnerSize = cssVar('spinner-size');

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

const getLoadingSizeStyles = (size: string) => {
  const spinnerSizeMapping = {
    xs: '0.75rem',
    s: '0.75rem',
    m: '1rem',
    l: '1rem',
  };

  return {
    [$spinnerSize.variable]: spinnerSizeMapping[size],
    loading: {
      width: $spinnerSize.reference,
      height: $spinnerSize.reference,
      padding: 0,
    },
  };
};

export const Button: ComponentStyleConfig = {
  baseStyle: {
    borderRadius: 'radii-button',
  },
  sizes: {
    xs: ({ theme, hasLoading = true }) => ({
      ...getTextStyleProperties(theme.textStyles['text-body-floating-label-medium']),
      px: '0.5rem',
      py: '0.25rem',
      ...(hasLoading && getLoadingSizeStyles('xs')),
    }),
    s: ({ theme, hasLoading = true }) => ({
      ...getTextStyleProperties(theme.textStyles['text-body-meta-medium']),
      px: '0.75rem',
      py: '0.5rem',
      ...(hasLoading && getLoadingSizeStyles('s')),
    }),
    m: ({ theme, hasLoading = true }) => ({
      ...getTextStyleProperties(theme.textStyles['text-body-medium']),
      px: '1rem',
      py: '0.5rem',
      ...(hasLoading && getLoadingSizeStyles('m')),
    }),
    l: ({ theme, hasLoading = true }) => ({
      ...getTextStyleProperties(theme.textStyles['text-body-large-medium']),
      px: '1.5rem',
      py: '0.75rem',
      ...(hasLoading && getLoadingSizeStyles('l')),
    }),
  },
  variants: {
    accent: ({ hasLoading }) => generateButton({ color: 'accent', hasLoading }),
    primary: ({ hasLoading }) => generateButton({ color: 'primary', hasLoading }),
    secondary: ({ hasLoading }) => generateButton({ color: 'secondary', hasLoading }),
    'primary-alt': ({ hasLoading }) => generateAltButton({ color: 'primary', hasLoading }),
    'secondary-alt': ({ hasLoading }) => generateAltButton({ color: 'secondary', hasLoading }),
    destroy: ({ hasLoading }) => generateButton({ color: 'alert-error', textColor: 'alert', hasLoading }),
    ghost: ({ hasLoading }) => ghostButton(hasLoading),
    ...getLinkVariants(),
  },
  defaultProps: {
    size: 'm',
    variant: 'primary',
  },
};
