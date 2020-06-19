import { ReactElement } from "react";
import { NavigationStyle } from "types";
export declare const NAVIGATION2_DEFAULT_TEST_ID = "navigation2";
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
export declare const Navigation2: ({ className, children, style, testId, }: Props) => JSX.Element;
export {};
//# sourceMappingURL=Navigation2.d.ts.map