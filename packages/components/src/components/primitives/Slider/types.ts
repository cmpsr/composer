import {
  SliderProps as ChakraSliderProps,
  SliderTrackProps as ChakraSliderTrackProps,
  SliderThumbProps as ChakraSliderTumbProps,
  BoxProps,
} from '@chakra-ui/react';

// SliderFilledTrack props matches with Box props
export interface SliderProps extends ChakraSliderProps {
  filledTrackProps?: BoxProps;
  trackProps?: ChakraSliderTrackProps;
  thumbProps?: ChakraSliderTumbProps;
}
