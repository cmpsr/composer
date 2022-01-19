import { ComponentStyleConfig } from '@chakra-ui/react';

export const CircularProgress: ComponentStyleConfig = {
  baseStyle: {
    label: {
      color: 'text-secondary',
      top: '50%',
      left: '50%',
      width: '100%',
      textAlign: 'center',
      position: 'absolute',
      transform: 'translate(-50%, -50%)',
    },
    track: {
      backgroundColor: 'background-static',
    },
    filledTrack: {
      backgroundColor: 'primary-default',
    },
  },
};
