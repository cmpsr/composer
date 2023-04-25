import { ComponentType, FC } from 'react';
import {
  DotGroupProps as BaseDotGroupProps,
  DotProps as BaseDotProps,
  SlideProps,
  SliderProps,
} from 'pure-react-carousel';
import { IconButtonProps } from '@components';
import { CSSWithMultiValues, RecursiveCSSObject } from '@chakra-ui/react';
export { CarouselProviderProps as CarouselProps } from 'pure-react-carousel';

export type ButtonProps = FC<Omit<IconButtonProps, 'aria-label'>>;
export type DotProps = FC<Omit<BaseDotProps, 'children'>>;
export type DotGroupProps = FC<Omit<BaseDotGroupProps, 'children'>>;

export type CarouselStyles = {
  buttonStyles: Record<string, RecursiveCSSObject<CSSWithMultiValues>>;
  chevronStyles: Record<string, RecursiveCSSObject<CSSWithMultiValues>>;
  dotStyles: Record<string, RecursiveCSSObject<CSSWithMultiValues>>;
};
export interface CarouselStaticMembers {
  Slider: ComponentType<SliderProps>;
  Slide: ComponentType<SlideProps>;
  ButtonBack: ButtonProps;
  ButtonNext: ButtonProps;
  Dot: DotProps;
  DotGroup: DotGroupProps;
}
