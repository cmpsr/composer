import React from 'react';
export declare const DROPDOWN_DEFAULT_TEST_ID = "dropdown";
interface Option {
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
export declare const DropdownSingleSelect: React.ForwardRefExoticComponent<Props & React.RefAttributes<HTMLElement>>;
export {};
//# sourceMappingURL=DropdownSingleSelect.d.ts.map