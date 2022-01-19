import React, { FC } from 'react';
import {
  CircularProgress as ChakraCircularProgress,
  useMultiStyleConfig,
} from '@chakra-ui/react';
import { CircularProgressProps } from './types';
import { Text, TextProps } from '..';

export const CircularProgress: FC<CircularProgressProps> = ({
  showLabel,
  ...props
}) => {
  const {
    label: labelStyles,
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
        <Text
          variant="text-body-meta-regular"
          {...labelStyles as TextProps}
        >
          {props.value}%
        </Text>
      )}
    </ChakraCircularProgress>
  );
};
