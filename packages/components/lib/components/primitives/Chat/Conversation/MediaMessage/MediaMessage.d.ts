/// <reference types="react" />
import { Image as ImageType } from 'types';
export declare const WRAPPER_MEDIA_MESSAGE_DEFAULT_TEST_ID = "wrapperMediaMessage";
export declare enum MediaMessageBorderColor {
    Black10 = "border-fill-black-10",
    Primary25 = "border-fill-primary-25",
    Secondary25 = "border-fill-secondary-25"
}
export declare enum MessagePlacement {
    Left = "left",
    Right = "right"
}
declare type Props = {
    className?: string;
    borderColor?: MediaMessageBorderColor;
    time?: string;
    placement?: MessagePlacement;
    image: ImageType;
    onClick?: () => void;
    testId?: string;
};
export declare const MediaMessage: ({ className, borderColor, time, placement, image, onClick, testId, }: Props) => JSX.Element;
export {};
//# sourceMappingURL=MediaMessage.d.ts.map