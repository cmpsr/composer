import { ComponentStyleConfig } from '@chakra-ui/theme';
import { StyleFunctionProps } from '@chakra-ui/theme-tools';
import { linkSizes } from '@components';
import { generateLink, linkPrimary } from './Link';

export const linkIconBaseStyle = {
  width: 'inherit',
  _hover: {
    textDecoration: 'none',
  },
};

const getSizes = () => {
  const sizes = {};
  linkSizes.forEach((size) => {
    sizes[size] = (props) => {
      return {
        ...props.theme.textStyles[
          {
            s: 'text-body-meta-medium',
            m: 'text-body-medium',
            l: 'text-body-large-medium',
          }[size]
        ],
      };
    };
  });
  return sizes;
};

export const LinkIcon: ComponentStyleConfig = {
  baseStyle: (props: StyleFunctionProps & { isInline: boolean }) => {
    const linkDisplayStyles = props.isInline
      ? { display: 'inline', marginInline: '0.25rem' }
      : { display: 'inline-flex' };

    return {
      ...linkIconBaseStyle,
      ...linkDisplayStyles,
    };
  },
  sizes: getSizes(),
  variants: {
    link: linkPrimary,
    'link-primary': linkPrimary,
    'link-accent': generateLink({
      default: 'text-link-accent-default',
      hover: 'text-link-accent-hover',
      pressed: 'text-link-accent-pressed',
      focus: 'accent-focus',
    }),
    'link-secondary': generateLink({
      default: 'text-link-secondary-default',
      hover: 'text-link-secondary-hover',
      pressed: 'text-link-secondary-pressed',
      focus: 'secondary-focus',
    }),
    'link-destroy': generateLink({
      default: 'alert-error-default',
      hover: 'alert-error-hover',
      pressed: 'alert-error-pressed',
      focus: 'alert-error-focus',
    }),
  },
  defaultProps: {
    size: 'l',
    variant: 'link-primary',
  },
};
