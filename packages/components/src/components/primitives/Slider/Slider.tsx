import React, { FC } from 'react';
import {
  Slider as ChakraSlider,
  SliderTrack,
  SliderFilledTrack,
  SliderThumb,
  useStyleConfig,
} from '@chakra-ui/react';

import { SliderProps } from './types';

export const Slider: FC<SliderProps> = ({
  trackProps,
  filledTrackProps,
  thumbProps,
  ...props
}) => {
  const styles = useStyleConfig('Slider', {
    variant: props.variant || 'default',
  });
  console.log('Styles', styles);
  return (
    <ChakraSlider colorScheme={String(styles.colorScheme)}>
      <SliderTrack>
        <SliderFilledTrack />
      </SliderTrack>
      <SliderThumb boxSize={20} />
    </ChakraSlider>
  );
};
