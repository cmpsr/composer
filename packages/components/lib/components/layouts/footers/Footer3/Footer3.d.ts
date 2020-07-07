import { ReactElement } from "react";
import { FooterStyle } from "types";
export declare const FOOTER3_DEFAULT_TEST_ID = "footer3";
declare type Props = {
    copy?: string;
    className?: string;
    children?: {
        logo?: ReactElement;
        content?: ReactElement | ReactElement[];
        secondaryContent?: ReactElement | ReactElement[];
    };
    style: FooterStyle;
    testId?: string;
};
export declare const Footer3: ({ className, copy, children, style, testId, }: Props) => JSX.Element;
export {};
//# sourceMappingURL=Footer3.d.ts.map