import { ComponentType, FC } from 'react';
import {
  DotGroupProps as BaseDotGroupProps,
  DotProps as BaseDotProps,
  SlideProps as BaseSlideProps,
  SliderProps as BaseSliderProps,
  CarouselProviderProps,
} from 'pure-react-carousel';
import { FlexProps, IconButtonProps } from '@cmpsr/components';

export const arrowVariants = ['floating', 'inline'] as const;
export type ArrowVariant = (typeof arrowVariants)[number];

export const buttonDirection = ['next', 'back'] as const;
export type ButtonDirection = (typeof buttonDirection)[number];

export type CarouselButtonProps = FC<
  Omit<IconButtonProps, 'aria-label'> & { arrowVariant?: ArrowVariant; direction?: ButtonDirection }
>;
export type DotProps = FC<Omit<BaseDotProps, 'children'>>;
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

export type CarouselProps = FC<
  FlexProps &
    Omit<CarouselProviderProps, 'totalSlides' | 'step' | 'dragStep'> & {
      showDots?: boolean;
      showArrows?: boolean;
      arrowVariant?: ArrowVariant;
    }
> &
  CarouselStaticMembers;
