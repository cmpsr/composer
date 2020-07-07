import { ReactElement } from "react";
import { NavigationStyle } from "types";
export declare const NAVIGATION6_DEFAULT_TEST_ID = "navigation6";
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
export declare const Navigation6: ({ className, children, style, testId, }: Props) => JSX.Element;
export {};
//# sourceMappingURL=Navigation6.d.ts.map