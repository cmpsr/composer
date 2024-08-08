import { ComponentStyleConfig } from '@chakra-ui/theme';
import { StyleFunctionProps } from '@chakra-ui/theme-tools';
import { linkSizes, buttonVariants } from '@components';
import { omit } from '@chakra-ui/utils';

const hoverable = `@media (pointer: fine)`;

export const linkBaseStyle = {
  width: 'inherit',
  borderRadius: '0.25rem',
  _hover: {
    textDecoration: 'none',
  },
};

const generateLink = (colors: { default: string; hover: string; pressed: string; focus: string; disabled: string }) => {
  return {
    color: colors.default,
    padding: 0,
    borderRadius: '0.25rem',
    _hover: {
      [hoverable]: {
        textDecoration: 'none',
        color: colors.hover,
      },
    },
    _active: {
      color: colors.pressed,
    },
    _focusVisible: {
      boxShadow: `0 0 0 0.25rem var(--chakra-colors-${colors.focus})`,
      color: colors.hover,
    },
    _disabled: {
      color: colors.disabled,
      cursor: 'not-allowed',
      boxShadow: 'none',
    },
  };
};

const isButtonVariant = (variant) => !variant.startsWith('link');

const getButtonVariants = () =>
  buttonVariants.reduce(
    (prev, variant) => ({
      ...prev,
      [variant]: (params: StyleFunctionProps) => {
        const variantValue = params.theme.components.Button.variants[variant];
        return omit(typeof variantValue === 'function' ? variantValue(params) : variantValue, ['loading']);
      },
    }),
    {}
  );

const getSizes = () => {
  const sizes = {};
  linkSizes.forEach((size) => {
    sizes[size] = (props) =>
      isButtonVariant(props.variant)
        ? omit(props.theme.components.Button.sizes[size](props), ['loading'])
        : {
            ...props.theme.textStyles[
              {
                s: 'text-body-meta-medium',
                m: 'text-body-medium',
                l: 'text-body-large-medium',
              }[size]
            ],
            columnGap: '0.5rem',
          };
  });
  return sizes;
};

const linkPrimary = generateLink({
  default: 'text-link-primary-default',
  hover: 'text-link-primary-hover',
  pressed: 'text-link-primary-pressed',
  focus: 'text-link-primary-hover',
  disabled: 'text-link-primary-disabled',
});

export const Link: ComponentStyleConfig = {
  baseStyle: (props: StyleFunctionProps & { isInline: boolean }) => {
    const buttonBaseStyle = {
      ...props.theme.components.Button.baseStyle,
      display: 'inline-flex',
      _hover: {
        textDecorationLine: 'none',
      },
    };

    const linkDisplayStyles = !props.isInline
      ? {
          display: 'inline-flex',
          alignItems: 'center',
        }
      : { display: 'inline' };

    return isButtonVariant(props.variant) ? buttonBaseStyle : { ...linkBaseStyle, ...linkDisplayStyles };
  },
  sizes: getSizes(),
  variants: {
    link: linkPrimary,
    'link-primary': linkPrimary,
    'link-light': generateLink({
      default: 'text-link-light-default',
      hover: 'text-link-light-hover',
      pressed: 'text-link-light-pressed',
      focus: 'text-link-light-hover',
      disabled: 'text-link-light-disabled',
    }),
    'link-accent': generateLink({
      default: 'text-link-accent-default',
      hover: 'text-link-accent-hover',
      pressed: 'text-link-accent-pressed',
      focus: 'text-link-accent-hover',
      disabled: 'text-link-accent-disabled',
    }),
    'link-secondary': generateLink({
      default: 'text-link-secondary-default',
      hover: 'text-link-secondary-hover',
      pressed: 'text-link-secondary-pressed',
      focus: 'text-link-secondary-hover',
      disabled: 'text-link-secondary-disabled',
    }),
    'link-destroy': generateLink({
      default: 'alert-error-default',
      hover: 'alert-error-hover',
      pressed: 'alert-error-pressed',
      focus: 'alert-error-hover',
      disabled: 'alert-error-disabled',
    }),
    ...getButtonVariants(),
  },
  defaultProps: {
    size: 'l',
    variant: 'link-primary',
  },
};
