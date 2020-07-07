/// <reference types="react" />
import { Video as VideoType } from "types";
declare type Props = {
    autoPlay?: boolean;
    controls?: boolean;
    className?: string;
    video: VideoType;
    testId?: string;
};
export declare const VIDEO_DEFAULT_TEST_ID = "video";
export declare const Video: ({ autoPlay, controls, className, video: { url }, testId, }: Props) => JSX.Element;
export {};
//# sourceMappingURL=Video.d.ts.map