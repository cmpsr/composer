import { ReactNode } from "react";
import { HeroStyle, Asset as AssetType } from "types";
declare type Props = {
    title?: string;
    subtitle?: string;
    eyebrow?: string;
    desktopAsset?: AssetType;
    mobileAsset?: AssetType;
    className?: string;
    children?: ReactNode;
    style: HeroStyle;
};
export declare const Hero7: ({ desktopAsset, mobileAsset, className, title, subtitle, eyebrow, children, style, }: Props) => JSX.Element;
export {};
//# sourceMappingURL=Hero7.d.ts.map