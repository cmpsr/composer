import { ReactElement } from 'react';
export declare const PRICING_PLAN_DEFAULT_TEST_ID = "pricing_plan1";
declare type Props = {
    title: string;
    price: string;
    className?: string;
    children?: {
        listItems?: string[];
        button?: ReactElement;
    };
    testId?: string;
};
export declare const PricingPlan1: ({ title, price, className, children, testId, }: Props) => JSX.Element;
export {};
//# sourceMappingURL=PricingPlan1.d.ts.map