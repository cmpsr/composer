import { ReactNode } from 'react';
import { TargetOption } from 'components/primitives/Link';
export declare const LINK_ITEM_DEFAULT_TEST_ID = "linkItem";
declare type Props = {
    className?: string;
    icon?: ReactNode;
    url?: string;
    route?: {
        slug: string;
    };
    title?: string;
    subTitle?: string;
    target?: TargetOption;
    testId?: string;
};
export declare const LinkItem: ({ className, url, route, title, icon, subTitle, target, testId, }: Props) => JSX.Element;
export {};
//# sourceMappingURL=LinkItem.d.ts.map