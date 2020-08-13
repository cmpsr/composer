import React from 'react';
export declare const TOOLTIP_DEFAULT_TEST_ID = "tooltip";
export declare enum TooltipBackgroundColor {
    Primary900 = "bg-fill-primary-900",
    Primary100 = "bg-fill-primary-100"
}
export declare enum TooltipPlace {
    Left = "left",
    Right = "right",
    Bottom = "bottom",
    Top = "top"
}
declare type Props = {
    place?: TooltipPlace;
    element: React.ReactNode;
    tooltip: React.ReactNode;
    className?: string;
    backgroundColor?: string;
    testId?: string;
};
export declare const Tooltip: ({ place, element, tooltip, className, backgroundColor, testId, }: Props) => JSX.Element;
export {};
//# sourceMappingURL=Tooltip.d.ts.map