import { ReactNode } from 'react';
export declare const ICONIC_BADGE_DEFAULT_TEST_ID = "iconicBadge";
export declare enum BadgeColor {
    Error = "bg-fill-system-error",
    Primary = "bg-fill-primary-100",
    Secondary = "bg-fill-secondary-100"
}
declare type Props = {
    icon: ReactNode;
    className?: string;
    testId?: string;
    color?: BadgeColor;
};
export declare const IconicBadge: ({ icon, color, className, testId, }: Props) => JSX.Element;
export {};
//# sourceMappingURL=IconicBadge.d.ts.map