import { ReactNode } from 'react';
export declare const LINK_DEFAULT_TEST_ID = "link";
export declare enum LinkTypes {
    Image = "flex justify-center",
    Text = "text-btn",
    Primary = "primary-btn",
    Secondary = "secondary-btn"
}
export declare enum TargetOption {
    Blank = "_blank",
    Parent = "_parent",
    Top = "_top",
    Framename = "framename"
}
declare type Props = {
    children?: ReactNode;
    className?: string;
    textClassName?: string;
    route?: {
        slug: string;
    };
    url?: string;
    type?: LinkTypes;
    testId?: string;
    target?: TargetOption;
};
export declare const Link: ({ children, className, route, type, url, testId, target, }: Props) => JSX.Element;
export {};
//# sourceMappingURL=Link.d.ts.map