import { ComponentStyleConfig } from '@chakra-ui/react';

export const CircularProgress: ComponentStyleConfig = {
  baseStyle: {
    label: {
      color: 'text-secondary',
    },
    track: {
      backgroundColor: 'background-static',
    },
    filledTrack: {
      backgroundColor: 'primary-default',
    },
  },
};
