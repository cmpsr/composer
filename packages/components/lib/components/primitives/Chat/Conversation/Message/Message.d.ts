/// <reference types="react" />
export declare const MESSAGE_DEFAULT_TEST_ID = "message";
export declare const WRAPPER_MESSAGE_DEFAULT_TEST_ID = "wrapperMessage";
export declare enum MessageBackgroundColor {
    Black100 = "bg-fill-black-100",
    Secondary600 = "bg-fill-secondary-600",
    Primary600 = "bg-fill-primary-600"
}
export declare enum MessagePlacement {
    Left = "left",
    Right = "right"
}
declare type Props = {
    text: string;
    className?: string;
    testId?: string;
    backgroundColor?: MessageBackgroundColor;
    placement?: MessagePlacement;
    time?: string;
};
export declare const Message: ({ text, className, testId, backgroundColor, placement, time, }: Props) => JSX.Element;
export {};
//# sourceMappingURL=Message.d.ts.map