import { ReactElement } from "react";
import { NavigationStyle } from "types";
export declare const NAVIGATION1_DEFAULT_TEST_ID = "navigation1";
declare type Props = {
    className?: string;
    style: NavigationStyle;
    children?: {
        logo?: ReactElement;
        content?: ReactElement | ReactElement[];
    };
    testId?: string;
};
export declare const Navigation1: ({ className, children, style, testId, }: Props) => JSX.Element;
export {};
//# sourceMappingURL=Navigation1.d.ts.map