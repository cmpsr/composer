import {
  anatomy,
  calc,
  cssVar,
  PartsStyleFunction,
  SystemStyleFunction,
  SystemStyleObject,
} from '@chakra-ui/theme-tools';
import { ComponentStyleConfig } from '@chakra-ui/react';

const parts = anatomy('switch').parts(
  'container',
  'track',
  'thumb',
  'leftLabel',
  'rightLabel'
);

const $width = cssVar('switch-track-width');
const $height = cssVar('switch-track-height');

const $diff = cssVar('switch-track-diff');
const diffValue = calc.subtract($width, $height);

const $translateX = cssVar('switch-thumb-x');

const omit = (key, obj) => {
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const { [key]: omitted, ...rest } = obj;
  return rest;
};

const styleBySize = {
  small: {
    container: {
      [$width.variable]: '1.625rem',
      [$height.variable]: '1rem',
    },
    leftLabel: {
      textStyle: 'text-body-meta-regular',
    },
    rightLabel: {
      textStyle: 'text-body-meta-regular',
    },
    thumb: {
      width: '0.75rem',
      height: '0.75rem',
    },
  },
  medium: {
    container: {
      [$width.variable]: '2.125rem',
      [$height.variable]: '1.25rem',
    },
    leftLabel: {
      textStyle: 'text-body-regular',
    },
    rightLabel: {
      textStyle: 'text-body-regular',
    },
    thumb: {
      width: '1rem',
      height: '1rem',
    },
  },
  large: {
    container: {
      [$width.variable]: '3.125rem',
      [$height.variable]: '1.75rem',
    },
    leftLabel: {
      textStyle: 'text-body-large-regular',
    },
    rightLabel: {
      textStyle: 'text-body-large-regular',
    },
    thumb: {
      width: '1.5rem',
      height: '1.5rem',
    },
  },
};

const getSizeStyleFunction = (size: string) => {
  return ({ theme }) => {
    const leftLabelStyle = omit(
      'color',
      theme.textStyles[styleBySize[size].leftLabel.textStyle]
    );
    const rightLabelStyle = omit(
      'color',
      theme.textStyles[styleBySize[size].rightLabel.textStyle]
    );

    return {
      ...styleBySize[size],
      leftLabel: {
        ...leftLabelStyle,
      },
      rightLabel: {
        ...rightLabelStyle,
      },
    };
  };
};

const sizes = {
  s: getSizeStyleFunction('small'),
  m: getSizeStyleFunction('medium'),
  l: getSizeStyleFunction('large'),
};

const baseStyleTrack: SystemStyleFunction = (props) => {
  const getCheckedColor = () => {
    if (props.isDisabled) {
      return 'background-action-disabled';
    }

    return 'primary-default';
  };

  return {
    p: '0.125rem',
    bg: 'background-action-active',
    alignItems: 'center',
    _focus: {
      boxShadow: '0 0 0 0.188rem var(--chakra-colors-primary-focus)',
    },
    _disabled: {
      opacity: 1,
      bgColor: 'background-action-disabled',
    },
    _checked: {
      bg: getCheckedColor(),
    },
  };
};

const baseStyleThumb: SystemStyleObject = {
  marginLeft: '0.125rem',
};

const baseStyle: PartsStyleFunction<typeof parts> = (props) => {
  const labelColor = props.isDisabled ? 'text-disabled' : 'text-primary';
  return {
    container: {
      [$diff.variable]: diffValue,
      [$translateX.variable]: $diff.reference,
      _rtl: {
        [$translateX.variable]: calc($diff).negate().toString(),
      },
    },
    track: baseStyleTrack(props),
    thumb: baseStyleThumb,
    leftLabel: {
      marginRight: '0.5rem',
      marginBottom: 0,
      color: labelColor,
    },
    rightLabel: {
      marginLeft: '0.5rem',
      marginBottom: 0,
      color: labelColor,
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
