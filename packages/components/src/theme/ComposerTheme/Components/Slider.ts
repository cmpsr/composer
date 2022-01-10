import { ComponentStyleConfig } from '@chakra-ui/theme';

// const generateColor = (color: string, variant?: boolean) => {
//   return variant ? `${color}-${variant}` : `${color}-default`;
// };

export const Slider: ComponentStyleConfig = {
  variants: {
    default: {
      colorScheme: 'red',
    },
    primary: {
      colorScheme: 'green',
    },
  },
};
