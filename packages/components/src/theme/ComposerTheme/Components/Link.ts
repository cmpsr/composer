import { ComponentStyleConfig } from '@chakra-ui/theme';
import { StyleFunctionProps } from '@chakra-ui/theme-tools';
import { linkSizes, buttonVariants } from '@components';

export const linkBaseStyle = {
  display: 'inline-flex',
  borderRadius: '0.25rem',
  _hover: {
    textDecoration: 'none',
  },
};

const generateLink = (textColor: string) => {
  const variantColor = textColor.split('-')[1];
  return {
    display: 'inline-flex',
    color: `text-${textColor}-default`,
    padding: 0,
    borderRadius: '0.25rem',
    _hover: {
      textDecoration: 'none',
      color: `text-${textColor}-hover`,
    },
    _active: {
      color: `text-${textColor}-pressed`,
    },
    _focus: {
      boxShadow: `0 0 0 0.25rem var(--chakra-colors-${variantColor}-focus)`,
      color: `text-${textColor}-hover`,
    },
    _focusVisible: {
      boxShadow: `0 0 0 0.25rem var(--chakra-colors-${variantColor}-focus)`,
      color: `text-${textColor}-hover`,
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
        return typeof variantValue === 'function' ? variantValue(params) : variantValue;
      },
    }),
    {}
  );

const getSizes = () => {
  const sizes = {};
  linkSizes.forEach((size) => {
    sizes[size] = (props) =>
      isButtonVariant(props.variant)
        ? props.theme.components.Button.sizes[size](props)
        : {
            ...props.theme.textStyles[
              {
                s: {
                  textStyleToken: 'text-body-meta-medium',
                },
                m: {
                  textStyleToken: 'text-body-medium',
                },
                l: {
                  textStyleToken: 'text-body-large-medium',
                },
              }[size].textStyleToken
            ],
            ...generateLink(props.variant),
          };
  });
  return sizes;
};

const linkPrimary = generateLink('link-primary');
export const Link: ComponentStyleConfig = {
  baseStyle: (props) => {
    const buttonBaseStyle = {
      ...props.theme.components.Button.baseStyle,
      display: 'inline-flex',
      _hover: {
        textDecorationLine: 'none',
      },
    };
    return isButtonVariant(props.variant) ? buttonBaseStyle : linkBaseStyle;
  },
  sizes: getSizes(),
  variants: {
    link: linkPrimary,
    'link-primary': linkPrimary,
    'link-accent': generateLink('link-accent'),
    ...getButtonVariants(),
  },
  defaultProps: {
    size: 'l',
    variant: 'link-primary',
  },
};
