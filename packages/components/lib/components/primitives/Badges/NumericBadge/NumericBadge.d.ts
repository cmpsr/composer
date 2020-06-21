/// <reference types="react" />
export declare const NUMERIC_BADGE_DEFAULT_TEST_ID = "numericBadge";
export declare enum BadgeColor {
    Error = "bg-fill-system-error",
    Primary = "bg-fill-primary-100",
    Secondary = "bg-fill-secondary-100"
}
declare type Props = {
    number: number;
    className?: string;
    testId?: string;
    color?: BadgeColor;
    maximumNumber?: number;
};
export declare const NumericBadge: ({ number, color, className, testId, maximumNumber, }: Props) => JSX.Element;
export {};
//# sourceMappingURL=NumericBadge.d.ts.map