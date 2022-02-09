import React, { FC } from 'react';
import { CircularProgress as ChakraProgressCircular, useMultiStyleConfig } from '@chakra-ui/react';
import { ProgressCircularProps } from './types';
import { Text, TextProps } from '..';

export const ProgressCircular: FC<ProgressCircularProps> = ({ showLabel, ...props }) => {
  const {
    label: labelStyles,
    filledTrack: { backgroundColor: filledTrackColor },
    track: { backgroundColor: trackColor },
  } = useMultiStyleConfig('ProgressCircular', {});

  return (
    <ChakraProgressCircular
      trackColor={trackColor as string}
      color={filledTrackColor as string}
      data-testid="cmpsr.progress-circular"
      {...props}
    >
      {showLabel && (
        <Text variant="text-body-meta-regular" {...(labelStyles as TextProps)}>
          {props.value}%
        </Text>
      )}
    </ChakraProgressCircular>
  );
};
