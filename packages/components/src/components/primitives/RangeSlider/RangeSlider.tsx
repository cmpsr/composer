import { FC } from 'react';
import {
  RangeSlider as ChakraRangeSlider,
  RangeSliderFilledTrack,
  RangeSliderThumb,
  RangeSliderTrack,
} from '@chakra-ui/react';
import { RangeSliderProps } from './types';

const RangeSlider: FC<RangeSliderProps> = ChakraRangeSlider;

const RangeSliderNamespace = Object.assign(RangeSlider, {
  Track: RangeSliderTrack,
  FilledTrack: RangeSliderFilledTrack,
  Thumb: RangeSliderThumb,
});

export { RangeSliderNamespace as RangeSlider };
