import { ReactElement } from "react";
import { NavigationStyle } from "types";
export declare const NAVIGATION3_DEFAULT_TEST_ID = "navigation3";
declare type Props = {
    className?: string;
    style: NavigationStyle;
    children?: {
        logo?: ReactElement;
        content?: ReactElement | ReactElement[];
    };
    testId?: string;
};
export declare const Navigation3: ({ className, children, style, testId, }: Props) => JSX.Element;
export {};
//# sourceMappingURL=Navigation3.d.ts.map