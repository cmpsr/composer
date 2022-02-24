import React, { FC } from 'react';
import { Slider as ChakraSlider, SliderFilledTrack, SliderThumb, SliderTrack, SliderMark } from '@chakra-ui/react';

import { SliderProps, SliderStaticMembers } from './types';

export const Slider: FC<SliderProps> & SliderStaticMembers = (props) => <ChakraSlider {...props} />;

Slider.Track = SliderTrack;
Slider.FilledTrack = SliderFilledTrack;
Slider.Thumb = SliderThumb;
Slider.Mark = SliderMark;
