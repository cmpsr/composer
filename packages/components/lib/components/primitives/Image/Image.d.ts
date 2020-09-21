/// <reference types="react" />
import { Image as ImageType } from 'types';
export declare const IMAGE_CONTENT_DEFAULT_TEST_ID = "imageContent";
export declare const IMAGE_DEFAULT_TEST_ID = "image";
declare type Props = {
    className?: string;
    imageClassName?: string;
    image: ImageType;
    testId?: string;
    onLoad?: () => void;
};
export declare const Image: ({ className, imageClassName, image: { title, url }, testId, onLoad, }: Props) => JSX.Element;
export {};
//# sourceMappingURL=Image.d.ts.map