/// <reference types="react" />
export declare const AVATAR_TEXT_DEFAULT_TEST_ID = "avatarText";
export declare enum AvatarSize {
    ExtraSmall = "w-1.75 h-1.75",
    Small = "w-10 h-10",
    Medium = "w-12 h-12",
    Large = "w-3.5 h-3.5"
}
export declare enum AvatarBackgroundColor {
    Primary100 = "bg-fill-primary-100",
    Primary25 = "bg-fill-primary-25"
}
declare type Props = {
    text: string;
    className?: string;
    highlightClassName?: string;
    testId?: string;
    size?: AvatarSize;
    backgroundColor?: AvatarBackgroundColor;
    isHighlighted?: boolean;
};
export declare const AvatarText: ({ text, className, highlightClassName, testId, size, backgroundColor, isHighlighted, }: Props) => JSX.Element;
export {};
//# sourceMappingURL=AvatarText.d.ts.map