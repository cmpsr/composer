import React from 'react';
export declare const SNACKBAR_DEFAULT_TEST_ID = "snackbar";
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
declare type Props = {
    testId?: string;
    open: boolean;
    message: string;
    description?: string;
    textPosition?: SnackbarTextPosition;
    type?: SnackbarType;
    position?: SnackbarPosition;
    autoClose?: number;
    action?: {
        childAction: React.ReactNode;
        onClickAction?: () => void;
    };
    onClose?: () => void;
};
export declare const Snackbar: ({ testId, open, message, description, textPosition, type, position, autoClose, action, onClose, }: Props) => JSX.Element;
export {};
//# sourceMappingURL=Snackbar.d.ts.map