import { FC } from 'react';
import {
  SliderProps as ChakraSliderProps,
  SliderTrackProps,
  SliderInnerTrackProps,
  SliderThumbProps,
  SliderMarkProps,
} from '@chakra-ui/react';

export type SliderProps = Omit<ChakraSliderProps, 'size'>;

export interface SliderStaticMembers {
  Track: FC<SliderTrackProps>;
  FilledTrack: FC<SliderInnerTrackProps>;
  Thumb: FC<SliderThumbProps>;
  Mark: FC<SliderMarkProps>;
}
