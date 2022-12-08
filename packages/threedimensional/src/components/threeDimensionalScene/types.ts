import { BoxProps } from "@chakra-ui/react";

export interface ThreeDimensionalSceneProps extends BoxProps {
  backgroundColor?: string;
  transparentBackgroundColor?: boolean;
  threeDimensionalObjectOrScene?: Blob;
}
