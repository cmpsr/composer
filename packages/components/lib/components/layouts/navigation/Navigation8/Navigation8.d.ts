import { ReactElement } from "react";
import { NavigationStyle } from "types";
export declare const NAVIGATION8_DEFAULT_TEST_ID = "navigation8";
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
export declare const Navigation8: ({ className, children, style, testId, }: Props) => JSX.Element;
export {};
//# sourceMappingURL=Navigation8.d.ts.map