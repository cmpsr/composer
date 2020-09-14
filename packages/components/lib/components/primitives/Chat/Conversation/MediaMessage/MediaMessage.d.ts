/// <reference types="react" />
import { MessageBackgroundColor, MessagePlacement } from 'components/primitives/Chat/Conversation/Message';
export declare const MEDIA_MESSAGE_DEFAULT_TEST_ID = "mediaMessage";
declare type Media = {
    contentType: string;
    url: string;
};
declare type Props = {
    text?: string;
    className?: string;
    testId?: string;
    placement?: MessagePlacement;
    backgroundColor?: MessageBackgroundColor;
    time?: string;
    mediaFiles: Media[];
    onClick?: (mediaFiles: Media[]) => void;
};
export declare const MediaMessage: ({ text, className, testId, placement, backgroundColor, time, mediaFiles, onClick, }: Props) => JSX.Element;
export {};
//# sourceMappingURL=MediaMessage.d.ts.map