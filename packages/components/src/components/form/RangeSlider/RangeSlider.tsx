import {
  RangeSlider as ChakraRangeSlider,
  RangeSliderFilledTrack,
  RangeSliderThumb,
  RangeSliderTrack,
} from '@chakra-ui/react';

const RangeSliderNamespace = Object.assign(ChakraRangeSlider, {
  Track: RangeSliderTrack,
  FilledTrack: RangeSliderFilledTrack,
  Thumb: RangeSliderThumb,
});

export { RangeSliderNamespace as RangeSlider };
