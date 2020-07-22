import React from 'react';
export declare const SHOW_SNACKBAR_DEFAULT_TEST_ID = "showSnackbar";
export declare const SNACKBAR_DEFAULT_TEST_ID = "Snackbar";
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
    className?: string;
    testId?: string;
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
export declare const hideSnackbar: () => false | void;
export declare const showSnackbar: ({ className, testId, message, description, textPosition, type, position, autoClose, action, onClose, }: Props) => void;
declare type SnackbarProps = {
    className?: string;
    testId?: string;
};
export declare const Snackbar: ({ className, testId, }: SnackbarProps) => JSX.Element;
export {};
//# sourceMappingURL=Snackbar.d.ts.map