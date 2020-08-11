import React from 'react';
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
};
export declare const Tooltip: ({ place, element, tooltip, className }: Props) => JSX.Element;
export {};
//# sourceMappingURL=Tooltip.d.ts.map