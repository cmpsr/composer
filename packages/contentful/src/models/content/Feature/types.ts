import { Feature } from "types";

export interface FeatureProps extends Feature {
  className?: string;
  isEmbedded?: boolean;
}
