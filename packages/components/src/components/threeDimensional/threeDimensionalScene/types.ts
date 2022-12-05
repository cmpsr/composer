import { BoxProps } from "@chakra-ui/react";

export const THREE_DIMENSIONAL_BACKGROUND_COLORS = ['black', 'white', 'transparent'] as const;
export type ThreeDimensionalBackgroundColors = typeof THREE_DIMENSIONAL_BACKGROUND_COLORS[number];

export interface ThreeDimensionalSceneProps extends BoxProps {
  backgroundColor?: ThreeDimensionalBackgroundColors;
}
