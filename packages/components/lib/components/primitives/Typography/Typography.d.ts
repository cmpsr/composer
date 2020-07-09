import { ReactNode } from 'react';
import { Style } from 'types';
export declare const TYPOGRAPHY_DEFAULT_TEST_ID = "typography";
export declare enum TypographyTypes {
    Headline1 = "typo-headline-1",
    Headline2 = "typo-headline-2",
    Headline3 = "typo-headline-3",
    Headline4 = "typo-headline-4",
    Headline5 = "typo-headline-5",
    Headline6 = "typo-headline-6",
    Body = "typo-body",
    Detail = "typo-detail",
    Eyebrow = "typo-eyebrow",
    Form = "typo-form",
    FormError = "typo-form-error",
    FormLabel = "typo-form-label",
    Button = "typo-button",
    Link = "typo-link"
}
export declare enum TypographyMode {
    Dark100 = "dark-100",
    Dark50 = "dark-50",
    Dark25 = "dark-25",
    Light100 = "light-100",
    Light50 = "light-50",
    Light25 = "light-25",
    Accent100 = "accent-100",
    Accent50 = "accent-50",
    Accent25 = "accent-25"
}
export declare enum TypographyIntensity {
    Light = "font-intensity-light",
    Regular = "font-intensity-regular",
    Medium = "font-intensity-medium",
    Bold = "font-intensity-bold"
}
declare type Props = {
    className?: string;
    style?: Style;
    tag: 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6' | 'p' | 'span' | 'label';
    type: TypographyTypes;
    intensity?: TypographyIntensity;
    children: ReactNode;
    mode?: TypographyMode;
    testId?: string;
    htmlFor?: string;
};
export declare const Typography: ({ className, children, style, type, intensity, tag, mode, htmlFor, testId, }: Props) => import("react").DetailedReactHTMLElement<{
    className: string;
    'data-testid': string;
    htmlFor: string;
}, HTMLElement>;
export {};
//# sourceMappingURL=Typography.d.ts.map