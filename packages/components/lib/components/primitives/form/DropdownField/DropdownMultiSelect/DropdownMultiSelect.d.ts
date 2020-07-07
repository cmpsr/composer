/// <reference types="react" />
export declare const DROPDOWN_DEFAULT_TEST_ID = "dropdown";
declare type Props = {
    className?: string;
    options?: {
        label: any;
        value: any;
    }[];
    placeHolder?: string;
    onItemChange?: (...args: any[]) => void;
    testId?: string;
    disabled?: boolean;
};
export declare const DropdownMultiSelect: ({ className, options, placeHolder, onItemChange, testId, disabled, }: Props) => JSX.Element;
export {};
//# sourceMappingURL=DropdownMultiSelect.d.ts.map