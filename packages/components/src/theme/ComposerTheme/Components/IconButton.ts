import { ComponentStyleConfig } from '@chakra-ui/react';

export const IconButton: ComponentStyleConfig = {
  baseStyle: ({ isRound, theme, variant, ...props }) => {
    const buttonStyles = theme.components.Button;
    const buttonVariant = buttonStyles.variants[variant];
    const resolvedButtonVariant = typeof buttonVariant === 'function' ? buttonVariant(props) : buttonVariant;
    const buttonLoadingStyles = resolvedButtonVariant.loading;
    const borderRadius = isRound ? 'full' : 'radii-button';

    return {
      borderRadius,
      loading: buttonLoadingStyles,
      _before: {
        ...resolvedButtonVariant._before,
        borderRadius,
      },
    };
  },
  sizes: {
    xs: {
      width: '1.5rem',
      height: '1.5rem',
      loading: {
        width: '0.75rem',
        height: '0.75rem',
        padding: 0,
      },
    },
    s: {
      width: '2.25rem',
      height: '2.25rem',
      loading: {
        width: '0.75rem',
        height: '0.75rem',
        padding: 0,
      },
    },
    m: {
      width: '2.5rem',
      height: '2.5rem',
      loading: {
        width: '1rem',
        height: '1rem',
        padding: 0,
      },
    },
    l: {
      width: '3.25rem',
      height: '3.25rem',
      loading: {
        width: '1rem',
        height: '1rem',
        padding: 0,
      },
    },
  },
  defaultProps: {
    size: 'm',
    variant: 'primary',
  },
};
