import { ComponentStyleConfig } from '@chakra-ui/theme';
import { buttonVariants, linkSizes } from '@components';

const linkBaseStyle = {
  maxWidth: '100%',
  color: 'text-link-primary-default',
  borderRadius: '0.25rem',
  _hover: {
    textDecoration: 'none',
    color: 'text-link-primary-hover',
  },
  _pressed: {
    color: 'text-link-primary-pressed',
  },
  _visited: {
    color: 'text-link-primary-pressed',
  },
  _focus: {
    boxShadow: `0 0 0 0.25rem var(--chakra-colors-primary-focus)`,
  },
  _focusVisible: {
    boxShadow: `0 0 0 0.25rem var(--chakra-colors-primary-focus)`,
  },
};

const isButtonVariant = (variant) => buttonVariants.includes(variant);

const getButtonVariants = () => {
  const variants = {};
  buttonVariants.forEach((variant) => {
    variants[variant] = ({ theme }) => ({
      p: { color: theme.components.Button.variants[variant].color },
      ...theme.components.Button.variants[variant],
    });
  });
  return variants;
};

const getButtonSize = (size, props) => {
  const { fontSize, lineHeight, letterSpacing, fontweight } = props.theme.components.Button.sizes[size](props);
  return {
    p: {
      fontSize,
      lineHeight,
      letterSpacing,
      fontweight,
    },
    color: 'text-link-primary-default',
    ...props.theme.components.Button.sizes[size](props),
  };
};

const getSizes = () => {
  const sizes = {};
  linkSizes.forEach((size) => {
    sizes[size] = (props) =>
      isButtonVariant(props.variant)
        ? getButtonSize(size, props)
        : {
            p: {
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
            },
          };
  });
  return sizes;
};

export const Link: ComponentStyleConfig = {
  baseStyle: (props) => {
    const buttonBaseStyle = {
      ...props.theme.components.Button.baseStyle,
      display: 'flex',
      _hover: {
        textDecorationLine: 'none',
      },
    };
    return isButtonVariant(props.variant) ? buttonBaseStyle : linkBaseStyle;
  },
  sizes: getSizes(),
  variants: getButtonVariants(),
};
