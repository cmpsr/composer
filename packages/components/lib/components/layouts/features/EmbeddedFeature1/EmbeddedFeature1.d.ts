import { ReactElement } from "react";
import { FeatureStyle, Asset as AssetType } from "types";
declare type Props = {
    title?: string;
    subtitle?: string;
    eyebrow?: string;
    embeddedAsset?: AssetType;
    className?: string;
    children?: ReactElement | ReactElement[];
    style: FeatureStyle;
};
export declare const EmbeddedFeature1: ({ embeddedAsset, className, title, subtitle, eyebrow, children, style, }: Props) => JSX.Element;
export {};
//# sourceMappingURL=EmbeddedFeature1.d.ts.map