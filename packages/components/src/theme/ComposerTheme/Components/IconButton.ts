import { ComponentStyleConfig } from '@chakra-ui/react';
import { transparentize } from '@chakra-ui/theme-tools';

const _disabled = {
  opacity: 1,
  cursor: 'not-allowed',
  backgroundColor: 'background-action-disabled',
};

export const IconButton: ComponentStyleConfig = {
  baseStyle: ({ isRound, theme, variant }) => {
    const buttonStyles = theme.components.Button;
    const buttonVariant = buttonStyles.variants[variant];
    const buttonLoadingStyles = buttonVariant.loading;

    return {
      borderRadius: isRound ? 'full' : '0.375rem',
      loading: {
        ...buttonLoadingStyles,
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
  variants: {
    ghost: {
      backgroundColor: 'background-action-default',
      color: 'text-link-secondary-default',
      loading: {
        ..._disabled,
        borderColor: 'text-link-secondary-default',
        borderBottomColor: transparentize('text-link-secondary-default', 0.3),
        borderLeftColor: transparentize('text-link-secondary-default', 0.3),
      },
      _disabled,
      _focus: {
        boxShadow: `0 0 0 0.1875rem var(--chakra-colors-primary-focus)`,
        backgroundColor: 'background-action-hover',
        color: 'text-link-secondary-hover',
        _disabled,
      },
      _hover: {
        backgroundColor: 'background-action-hover',
        color: 'text-link-secondary-hover',
        _disabled,
      },
    },
  },
  defaultProps: {
    size: 'm',
    variant: 'primary',
  },
};
