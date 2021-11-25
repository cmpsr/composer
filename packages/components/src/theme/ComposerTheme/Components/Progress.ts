import { progressAnatomy as parts } from '@chakra-ui/anatomy';
import { ComponentMultiStyleConfig } from '@chakra-ui/theme';
import {
  getColor,
  PartsStyleFunction,
  StyleFunctionProps,
  SystemStyleObject,
} from '@chakra-ui/theme-tools';

const filledStyle = (props: StyleFunctionProps): SystemStyleObject => {
  const { theme: t, isIndeterminate } = props;

  const bgColor = 'secondary-ui-default';

  const gradient = `linear-gradient(
      to right,
      transparent 0%,
      ${getColor(t, bgColor)} 50%,
      transparent 100%
    )`;

  return {
    ...(isIndeterminate ? { bgImage: gradient } : { bgColor }),
  };
};

const baseStyle: PartsStyleFunction<typeof parts> = (props) => ({
  filledTrack: { ...filledStyle(props) },
  track: {
    bgColor: 'background-container-secondary',
  },
});

export const Progress: ComponentMultiStyleConfig = {
  parts: parts.keys,
  baseStyle,
};
