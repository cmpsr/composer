import { ReactNode } from 'react';
export declare const BOX_DEFAULT_TEST_ID = "box";
declare type Props = {
    children?: ReactNode;
    className?: string;
    size?: 'full' | 'screen' | 'content';
    testId?: string;
};
export declare const Box: ({ children, className, size, testId, }: Props) => JSX.Element;
export {};
//# sourceMappingURL=Box.d.ts.map