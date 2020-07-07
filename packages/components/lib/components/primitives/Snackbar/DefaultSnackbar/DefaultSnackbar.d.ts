import React from 'react';
export declare const DEFAULT_SNACKBAR_DEFAULT_TEST_ID = "defaultSnackbar";
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
export declare type SnackbarProps = {
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
};
export declare const DefaultSnackbar: ({ testId, open, message, description, textPosition, type, position, autoClose, action, }: SnackbarProps) => JSX.Element;
//# sourceMappingURL=DefaultSnackbar.d.ts.map