import React from 'react';
export declare enum BackgroundColor {
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
};
export declare const Tooltip: ({ place, element, tooltip, className, backgroundColor, }: Props) => JSX.Element;
export {};
//# sourceMappingURL=Tooltip.d.ts.map