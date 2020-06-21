import React from 'react';
export declare const TOOLTIP_DEFAULT_TEST_ID = "tooltip";
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
    backgroundColor?: string;
};
export declare const Tooltip: ({ id, place, tooltip, element, testId, backgroundColor, }: Props) => JSX.Element;
export {};
//# sourceMappingURL=Tooltip.d.ts.map