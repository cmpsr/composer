/// <reference types="react" />
export declare const CIRCULAR_DEFAULT_TEST_ID = "circular";
export declare enum CircularSize {
    Small = "small",
    Large = "large"
}
export declare enum CircularColor {
    Primary = "stroke-fill-primary-900",
    White = "white"
}
declare type Props = {
    className?: string;
    strokeWidth?: number;
    testId?: string;
    size?: CircularSize;
    color?: CircularColor;
};
export declare const Circular: ({ className, strokeWidth, testId, size, color, }: Props) => JSX.Element;
export {};
//# sourceMappingURL=Circular.d.ts.map