import React, { FC } from 'react';
import {
  CSSWithMultiValues,
  RecursiveCSSObject,
  Slider as ChakraSlider,
  SliderFilledTrack,
  SliderThumb,
  SliderTrack,
  useStyleConfig,
} from '@chakra-ui/react';

import { SliderProps } from './types';

export const Slider: FC<SliderProps> = ({
  filledTrackProps,
  thumbProps,
  trackProps,
  ...props
}) => {
  const { sliderBg, _focus, boxSize, bg } = useStyleConfig('Slider') as Record<
    string,
    RecursiveCSSObject<CSSWithMultiValues>
  >;

  return (
    <ChakraSlider {...props}>
      <SliderTrack bg={sliderBg as string} {...trackProps}>
        <SliderFilledTrack bg={bg as string} {...filledTrackProps} />
      </SliderTrack>
      <SliderThumb
        _focus={_focus}
        boxSize={boxSize as number}
        {...thumbProps}
      />
    </ChakraSlider>
  );
};
