import React, { FC } from 'react';
import {
  Slider as ChakraSlider,
  SliderTrack,
  SliderFilledTrack,
  SliderThumb,
  useMultiStyleConfig,
  RecursiveCSSObject,
  CSSWithMultiValues,
} from '@chakra-ui/react';

import { SliderProps } from './types';

export const Slider: FC<SliderProps> = ({
  trackProps,
  filledTrackProps,
  thumbProps,
  ...props
}) => {
  const { sliderBg, _focus, boxSize, bg } = useMultiStyleConfig('Slider', {
    variant: props.variant || 'default',
  }) as Record<string, RecursiveCSSObject<CSSWithMultiValues>> & {
    sliderBg: string;
  };

  return (
    <ChakraSlider {...props}>
      <SliderTrack bg={sliderBg} {...trackProps}>
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
