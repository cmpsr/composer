import React from 'react';
export declare const TOOLTIP_DEFAULT_TEST_ID = "tooltip";
export declare enum BackgroundColor {
    Primary100 = "!bg-fill-primary-100",
    Primary75 = "!bg-fill-primary-75"
}
export declare enum TooltipPlace {
    Left = "left",
    Right = "right",
    Bottom = "bottom",
    Top = "top"
}
declare type Props = {
    id: string;
    place?: TooltipPlace;
    tooltip: React.ReactNode;
    element: React.ReactNode;
    testId?: string;
    backgroundColor?: BackgroundColor;
    className?: string;
};
export declare const Tooltip: ({ id, place, tooltip, element, testId, backgroundColor, className, }: Props) => JSX.Element;
export {};
//# sourceMappingURL=Tooltip.d.ts.map