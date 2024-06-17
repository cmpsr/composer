import { ComponentType, FC } from 'react';
import {
  DotGroupProps as BaseDotGroupProps,
  DotProps as BaseDotProps,
  SlideProps as BaseSlideProps,
  SliderProps as BaseSliderProps,
  ButtonBackProps,
  ButtonNextProps,
  CarouselProviderProps,
} from 'pure-react-carousel';
import { FlexProps } from '@cmpsr/components';

export type CarouselButtonProps = FC<Omit<ButtonBackProps | ButtonNextProps, 'aria-label'>>;
export type DotProps = FC<Omit<BaseDotProps, 'children'> & FlexProps>;
export type DotGroupProps = FC<Omit<BaseDotGroupProps, 'children'>>;
export type SliderProps = FC<Omit<BaseSliderProps, 'children'>>;
export type NavigationContainerProps = FC<FlexProps>;
export type SlideProps = FC<BaseSlideProps>;

interface CarouselStaticMembers {
  Slider: ComponentType<BaseSliderProps>;
  Slide: SlideProps;
  ButtonBack: CarouselButtonProps;
  ButtonNext: CarouselButtonProps;
  Dot: DotProps;
  DotGroup: DotGroupProps;
  NavigationContainer: NavigationContainerProps;
}

export type CarouselProps = FC<FlexProps & Omit<CarouselProviderProps, 'totalSlides' | 'step' | 'dragStep'>> &
  CarouselStaticMembers;
