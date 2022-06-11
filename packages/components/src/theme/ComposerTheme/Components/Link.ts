import { ComponentStyleConfig } from '@chakra-ui/theme';
import { linkVariants, linkSizes } from '@components';

export const linkBaseStyle = {
  display: 'inline-flex',
  color: 'text-link-primary-default',
  borderRadius: '0.25rem',
  _hover: {
    textDecoration: 'none',
  },
  _focus: {
    boxShadow: `0 0 0 0.25rem var(--chakra-colors-primary-focus)`,
  },
  _focusVisible: {
    boxShadow: `0 0 0 0.25rem var(--chakra-colors-primary-focus)`,
  },
};

const isButtonVariant = (variant) => linkVariants.includes(variant);

const getButtonVariants = () => {
  const variants = {};
  linkVariants.forEach((variant) => {
    variants[variant] = ({ theme, ...rest }) => {
      const variantContent = theme.components.Button.variants[variant];
      return typeof variantContent === 'function' ? variantContent(rest) : variantContent;
    };
  });
  return variants;
};

const getButtonSize = (size, props) => ({
  ...props.theme.components.Button.sizes[size](props),
  color: 'text-link-primary-default',
});

const getSizes = () => {
  const sizes = {};
  linkSizes.forEach((size) => {
    sizes[size] = (props) =>
      isButtonVariant(props.variant)
        ? getButtonSize(size, props)
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
            color: 'text-link-primary-default',
            _hover: {
              color: 'text-link-primary-hover',
            },
            _active: {
              color: 'text-link-primary-pressed',
            },
            _focus: {
              color: 'text-link-primary-hover',
            },
          };
  });
  return sizes;
};

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
  variants: getButtonVariants(),
  defaultProps: {
    size: 'l',
    variant: undefined,
  },
};
