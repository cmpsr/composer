import { ReactNode } from 'react';
export declare const BUTTON_DEFAULT_TEST_ID = "button";
export declare enum ButtonTypes {
    Primary = "primary-btn",
    Secondary = "secondary-btn"
}
export declare enum ButtonShapes {
    Rounded = "rounded-btn-rounded",
    SemiRounded = "rounded-btn-semi-rounded",
    Rectangle = "rounded-btn-rectangle"
}
declare type Props = {
    children?: ReactNode;
    className?: string;
    onClick?: (...args: any[]) => void;
    type?: ButtonTypes;
    htmlType?: 'button' | 'submit' | 'reset';
    testId?: string;
    disabled?: boolean;
    shape?: ButtonShapes;
};
export declare const Button: ({ children, className, onClick, type, htmlType, testId, disabled, shape, }: Props) => JSX.Element;
export {};
//# sourceMappingURL=Button.d.ts.map