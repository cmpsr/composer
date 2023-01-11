import { BoxProps } from "@cmpsr/components";

export interface ThreeDimensionalSceneProps extends BoxProps {
  backgroundColor?: string;
  transparentBackgroundColor?: boolean;
  threeDimensionalObjectOrScene?: Blob;
}
