import { ReactElement } from "react";
import { FooterStyle } from "types";
export declare const FOOTER1_DEFAULT_TEST_ID = "footer1";
declare type Props = {
    copy?: string;
    className?: string;
    children?: {
        logo?: ReactElement;
        content?: ReactElement | ReactElement[];
    };
    style: FooterStyle;
    testId?: string;
};
export declare const Footer1: ({ className, copy, children, style, testId, }: Props) => JSX.Element;
export {};
//# sourceMappingURL=Footer1.d.ts.map