import { ReactElement } from "react";
import { NavigationStyle } from "types";
export declare const NAVIGATION5_DEFAULT_TEST_ID = "navigation5";
declare type Props = {
    className?: string;
    style: NavigationStyle;
    children?: {
        logo?: ReactElement;
        content?: ReactElement | ReactElement[];
    };
    testId?: string;
};
export declare const Navigation5: ({ className, children, style, testId, }: Props) => JSX.Element;
export {};
//# sourceMappingURL=Navigation5.d.ts.map