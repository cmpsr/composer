import { ComponentStyleConfig } from '@chakra-ui/theme';
import { buttonVariants } from 'components/primitives/Button/types';
import { linkSizes } from 'components/primitives/Link/types';

const linkBaseStyle = {
  maxWidth: '100%',
  color: 'text-link-primary-default',
  borderRadius: '4px',
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
    boxShadow: `0 0 0 4px var(--chakra-colors-primary-focus)`,
  },
  _focusVisible: {
    boxShadow: `0 0 0 4px var(--chakra-colors-primary-focus)`,
  },
};

const isButtonVariant = (variant) => buttonVariants.includes(variant);

const getButtonVariants = () => {
  let variants = {};
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
  let sizes = {};
  const LINK_SIZES_DETAILS = {
    s: {
      buttonSize: 'sm',
      textStyleToken: 'text-body-meta-medium',
    },
    m: {
      buttonSize: 'md',
      textStyleToken: 'text-body-medium',
    },
    l: {
      buttonSize: 'lg',
      textStyleToken: 'text-body-large-medium',
    },
  };

  linkSizes.forEach((size) => {
    sizes[size] = (props) =>
      buttonVariants.includes(props.variant)
        ? getButtonSize(LINK_SIZES_DETAILS[size].buttonSize, props)
        : {
            p: {
              ...props.theme.textStyles[LINK_SIZES_DETAILS[size].textStyleToken],
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
