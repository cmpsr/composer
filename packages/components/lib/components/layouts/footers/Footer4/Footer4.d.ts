import { ReactElement } from "react";
import { FooterStyle } from "types";
export declare const FOOTER4_DEFAULT_TEST_ID = "footer4";
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
export declare const Footer4: ({ className, copy, children, style, testId, }: Props) => JSX.Element;
export {};
//# sourceMappingURL=Footer4.d.ts.map