import { ComponentStyleConfig } from '@chakra-ui/react';

export const ButtonIcon: ComponentStyleConfig = {
  baseStyle: ({ isRound, theme, variant, ...props }) => {
    const buttonStyles = theme.components.Button;
    const buttonVariant = buttonStyles.variants[variant];
    const resolvedButtonVariant = typeof buttonVariant === 'function' ? buttonVariant(props) : buttonVariant;
    const buttonLoadingStyles = resolvedButtonVariant.loading;
    const borderRadius = isRound ? 'full' : 'radii-button';

    return {
      borderRadius,
      minWidth: 'unset',
      loading: buttonLoadingStyles,
      _before: {
        ...buttonVariant._before,
        borderRadius,
      },
    };
  },
  sizes: {
    xs: {
      px: 'spacer-button-icon-XS',
      py: 'spacer-button-icon-XS',
      loading: {
        width: '0.75rem',
        height: '0.75rem',
        padding: 0,
      },
    },
    s: {
      px: 'spacer-button-icon-S',
      py: 'spacer-button-icon-S',
      loading: {
        width: '0.75rem',
        height: '0.75rem',
        padding: 0,
      },
    },
    m: {
      px: 'spacer-button-icon-M',
      py: 'spacer-button-icon-M',
      loading: {
        width: '1rem',
        height: '1rem',
        padding: 0,
      },
    },
    l: {
      px: 'spacer-button-icon-L',
      py: 'spacer-button-icon-L',
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
