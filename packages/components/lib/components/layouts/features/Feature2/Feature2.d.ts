import { ReactElement } from "react";
import { FeatureStyle, Asset as AssetType } from "types";
declare type Props = {
    title?: string;
    subtitle?: string;
    eyebrow?: string;
    desktopAsset?: AssetType;
    mobileAsset?: AssetType;
    className?: string;
    children?: ReactElement | ReactElement[];
    style: FeatureStyle;
};
export declare const Feature2: ({ desktopAsset, mobileAsset, className, title, subtitle, eyebrow, children, style, }: Props) => JSX.Element;
export {};
//# sourceMappingURL=Feature2.d.ts.map