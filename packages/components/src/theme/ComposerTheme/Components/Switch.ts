import { anatomy, cssVar, PartsStyleFunction, SystemStyleFunction } from '@chakra-ui/theme-tools';
import { ComponentStyleConfig } from '@chakra-ui/react';

const parts = anatomy('switch').parts('container', 'track', 'thumb', 'label');

const $width = cssVar('switch-track-width');
const $height = cssVar('switch-track-height');

const styleBySize = {
  s: {
    container: {
      [$width.variable]: '1.625rem',
      [$height.variable]: '1rem',
    },
    label: {
      textStyle: 'text-body-meta-regular',
    },
    thumb: {
      width: '0.75rem',
      height: '0.75rem',
    },
  },
  m: {
    container: {
      [$width.variable]: '2.125rem',
      [$height.variable]: '1.25rem',
    },
    label: {
      textStyle: 'text-body-regular',
    },
    thumb: {
      width: '1rem',
      height: '1rem',
    },
  },
  l: {
    container: {
      [$width.variable]: '3.125rem',
      [$height.variable]: '1.75rem',
    },
    label: {
      textStyle: 'text-body-large-regular',
    },
    thumb: {
      width: '1.5rem',
      height: '1.5rem',
    },
  },
};

const getSizeStyleFunction = (size: string) => (props) => ({
  ...styleBySize[size],
  label: {
    ...props.theme.textStyles[styleBySize[size].label.textStyle],
    color: props.isDisabled ? 'text-disabled' : 'text-primary',
  },
});

const sizes = {
  s: getSizeStyleFunction('s'),
  m: getSizeStyleFunction('m'),
  l: getSizeStyleFunction('l'),
};

const baseStyleTrack: SystemStyleFunction = () => ({
  p: '0',
  bg: 'background-action-active',
  alignItems: 'center',
  _focus: {
    boxShadow: '0 0 0 0.1875rem var(--chakra-colors-primary-focus)',
  },
  _disabled: {
    opacity: 1,
    bgColor: 'background-action-disabled',
  },
  _checked: {
    _disabled: {
      bg: 'background-action-disabled',
    },
    bg: 'primary-default',
  },
});

const baseStyle: PartsStyleFunction<typeof parts> = (props) => {
  return {
    track: baseStyleTrack(props),
    thumb: { marginLeft: '0.125rem', bg: 'background-action-default' },
    label: {
      margin: 0,
    },
  };
};

const defaultProps = {
  size: 'm',
};

export const Switch: ComponentStyleConfig = {
  parts: parts.keys,
  baseStyle,
  sizes,
  defaultProps,
};
