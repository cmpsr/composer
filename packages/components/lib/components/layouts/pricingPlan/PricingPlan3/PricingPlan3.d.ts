import { ReactElement } from 'react';
export declare const PRICING_PLAN_DEFAULT_TEST_ID = "pricingPlan3";
declare type Props = {
    title: string;
    price: string;
    className?: string;
    displayItems?: number;
    children?: {
        listItems?: string[];
        button?: ReactElement;
    };
    testId?: string;
};
export declare const PricingPlan3: ({ title, price, children, className, displayItems, testId, }: Props) => JSX.Element;
export {};
//# sourceMappingURL=PricingPlan3.d.ts.map