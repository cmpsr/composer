/// <reference types="react" />
import { Asset as AssetType } from "types";
declare type Props = {
    className?: string;
    imageClassName?: string;
    asset: AssetType;
    autoPlay?: boolean;
    controls?: boolean;
};
export declare const Asset: ({ autoPlay, controls, className, imageClassName, asset: { contentType, title, url }, }: Props) => JSX.Element;
export {};
//# sourceMappingURL=Asset.d.ts.map