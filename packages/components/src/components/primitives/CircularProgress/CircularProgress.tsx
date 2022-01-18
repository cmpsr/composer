import React, { FC } from 'react';
import {
  CircularProgress as ChakraCircularProgress,
  CircularProgressLabel,
  useMultiStyleConfig,
} from '@chakra-ui/react';
import { CircularProgressProps } from './types';

export const CircularProgress: FC<CircularProgressProps> = ({
  showLabel,
  ...props
}) => {
  const {
    label: { color },
    filledTrack: { backgroundColor: filledTrackColor },
    track: { backgroundColor: trackColor },
  } = useMultiStyleConfig('CircularProgress', {});

  return (
    <ChakraCircularProgress
      trackColor={trackColor as string}
      color={filledTrackColor as string}
      data-testid="cmpsr.circular-progress"
      {...props}
    >
      {showLabel && (
        <CircularProgressLabel color={color as string}>
          {props.value}%
        </CircularProgressLabel>
      )}
    </ChakraCircularProgress>
  );
};
