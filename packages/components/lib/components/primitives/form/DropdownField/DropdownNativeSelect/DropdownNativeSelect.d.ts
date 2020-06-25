import React from 'react';
export declare const DROPDOWN_NATIVE_DEFAULT_TEST_ID = "dropdown_native";
export interface Option {
    label: any;
    value: any;
}
declare type Props = {
    className?: string;
    options?: Option[];
    placeHolder?: string;
    initialSelectedOption?: Option;
    onItemChange?: (item: Option) => void;
    testId?: string;
    disabled?: boolean;
    name?: string;
    invalid?: boolean;
};
export declare const DropdownNativeSelect: React.ForwardRefExoticComponent<Props & React.RefAttributes<HTMLSelectElement>>;
export {};
//# sourceMappingURL=DropdownNativeSelect.d.ts.map