import { ReactElement } from "react";
import { SectionStyle } from "types";
declare type Props = {
    children?: {
        title?: ReactElement;
        subtitle?: ReactElement;
        content?: ReactElement | ReactElement[];
    };
    className?: string;
    style?: SectionStyle;
};
export declare const Section: ({ children, className }: Props) => JSX.Element;
export {};
//# sourceMappingURL=Section.d.ts.map