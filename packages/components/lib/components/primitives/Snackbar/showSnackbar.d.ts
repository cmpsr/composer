import React from 'react';
export declare enum SnackbarType {
    Default = "default",
    Success = "success",
    Warning = "warning",
    Error = "error"
}
export declare enum SnackbarTextPosition {
    Left = "left",
    Right = "right"
}
export declare enum SnackbarPosition {
    TopCenter = "top-center",
    TopRight = "top-right",
    TopLeft = "top-left",
    BottomRight = "bottom-right",
    BottomCenter = "bottom-center",
    BottomLeft = "bottom-left"
}
declare type ShowSnackbarProps = {
    message: string;
    description?: string;
    showIcon?: boolean;
    icon?: React.ReactNode;
    textPosition?: SnackbarTextPosition;
    showButton?: boolean;
    buttonText?: string;
    type?: SnackbarType;
    position?: SnackbarPosition;
};
export declare const showSnackbar: ({ message, description, showIcon, icon, textPosition, showButton, buttonText, type, position, }: ShowSnackbarProps) => void;
export {};
//# sourceMappingURL=showSnackbar.d.ts.map