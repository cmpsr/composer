import React, { FC } from 'react';
import { CircularProgress as ChakraProgressCircular, useStyleConfig } from '@chakra-ui/react';
import { ProgressCircularProps } from './types';
import { Text, TextProps } from '../../typography';

export const ProgressCircular: FC<ProgressCircularProps> = ({ showLabel, ...props }) => {
  const {
    label: labelStyles,
    filledTrack: { backgroundColor: filledTrackColor },
    track: { backgroundColor: trackColor },
  } = useStyleConfig('ProgressCircular') as {
    label: TextProps;
    filledTrack: { backgroundColor: string };
    track: { backgroundColor: string };
  };

  return (
    <ChakraProgressCircular
      trackColor={trackColor}
      color={filledTrackColor}
      data-testid="cmpsr.progress-circular"
      {...props}
    >
      {showLabel && (
        <Text variant="text-body-meta-regular" {...labelStyles}>
          {props.value}%
        </Text>
      )}
    </ChakraProgressCircular>
  );
};
