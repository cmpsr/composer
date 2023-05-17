import React from 'react';
import { Slider as ChakraSlider, SliderFilledTrack, SliderThumb, SliderTrack, SliderMark, forwardRef, SliderProps } from '@chakra-ui/react';

const Slider = forwardRef<SliderProps, typeof ChakraSlider>((props, ref) => <ChakraSlider ref={ref} orientation="horizontal" {...props} />);

const SliderNamespace = Object.assign(Slider, {
  Track: SliderTrack,
  FilledTrack: SliderFilledTrack,
  Thumb: SliderThumb,
  Mark: SliderMark,
});
export { SliderNamespace as Slider };
