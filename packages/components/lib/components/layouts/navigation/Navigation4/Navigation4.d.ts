import { ReactElement } from "react";
import { NavigationStyle } from "types";
export declare const NAVIGATION4_DEFAULT_TEST_ID = "navigation4";
declare type Props = {
    className?: string;
    style: NavigationStyle;
    children?: {
        logo?: ReactElement;
        content?: ReactElement | ReactElement[];
        secondaryContent?: ReactElement | ReactElement[];
    };
    testId?: string;
};
export declare const Navigation4: ({ className, children, style, testId, }: Props) => JSX.Element;
export {};
//# sourceMappingURL=Navigation4.d.ts.map