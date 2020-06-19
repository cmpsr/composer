import { ReactElement } from "react";
import { NavigationStyle } from "types";
export declare const NAVIGATION7_DEFAULT_TEST_ID = "navigation7";
declare type Props = {
    className?: string;
    style: NavigationStyle;
    children?: {
        logo?: ReactElement;
        content?: ReactElement | ReactElement[];
    };
    testId?: string;
};
export declare const Navigation7: ({ className, children, style, testId, }: Props) => JSX.Element;
export {};
//# sourceMappingURL=Navigation7.d.ts.map