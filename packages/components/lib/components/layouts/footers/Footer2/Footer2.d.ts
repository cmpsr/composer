import { ReactElement } from "react";
import { FooterStyle } from "types";
export declare const FOOTER2_DEFAULT_TEST_ID = "footer2";
declare type Props = {
    copy?: string;
    className?: string;
    children?: {
        logo?: ReactElement;
        secondaryContent?: ReactElement | ReactElement[];
    };
    style: FooterStyle;
    testId?: string;
};
export declare const Footer2: ({ className, copy, children, style, testId, }: Props) => JSX.Element;
export {};
//# sourceMappingURL=Footer2.d.ts.map