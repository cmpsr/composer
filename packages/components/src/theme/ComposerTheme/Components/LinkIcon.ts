import { ComponentStyleConfig } from '@chakra-ui/theme';
import { StyleFunctionProps } from '@chakra-ui/theme-tools';

export const LinkIcon: ComponentStyleConfig = {
  baseStyle: (props: StyleFunctionProps & { isInline: boolean }) => {
    const linkDisplayStyles = props.isInline
      ? { display: 'inline', marginInline: '0.25rem' }
      : { display: 'inline-flex' };

    return {
      ...props.theme.components.Link.baseStyle,
      ...linkDisplayStyles,
    };
  },
  variants: {
    'link-primary': (props) => props.theme.components.Link.variants['link-primary'],
    'link-accent': (props) => props.theme.components.Link.variants['link-accent'],
    'link-secondary': (props) => props.theme.components.Link.variants['link-secondary'],
    'link-destroy': (props) => props.theme.components.Link.variants['link-destroy'],
  },
  defaultProps: {
    size: 'l',
    variant: 'link-primary',
  },
};
