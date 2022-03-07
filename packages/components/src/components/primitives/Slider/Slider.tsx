import { Slider, SliderFilledTrack, SliderThumb, SliderTrack, SliderMark } from '@chakra-ui/react';

const SliderNamespace = Object.assign(Slider, {
  Track: SliderTrack,
  FilledTrack: SliderFilledTrack,
  Thumb: SliderThumb,
  Mark: SliderMark,
});
export { SliderNamespace as Slider };
