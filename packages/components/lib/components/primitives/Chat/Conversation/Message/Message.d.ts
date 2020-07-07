/// <reference types="react" />
export declare const MESSAGE_DEFAULT_TEST_ID = "message";
export declare const WRAPPER_MESSAGE_DEFAULT_TEST_ID = "wrapperMessage";
export declare enum MessageBackgroundColor {
    Black10 = "bg-fill-black-10",
    Secondary25 = "bg-fill-secondary-25",
    Primary25 = "bg-fill-primary-25"
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