/// <reference types="react" />
import { MessagePlacement } from 'components/primitives/Chat/Conversation/Message';
export declare const MESSAGE_ERROR_DEFAULT_TEST_ID = "messageError";
declare type Props = {
    text: string;
    className?: string;
    testId?: string;
    placement?: MessagePlacement;
    errorText?: string;
    onErrorClick?: () => void;
};
export declare const MessageError: ({ text, className, testId, placement, errorText, onErrorClick, }: Props) => JSX.Element;
export {};
//# sourceMappingURL=MessageError.d.ts.map