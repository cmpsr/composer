import React from 'react';
export interface Option {
    label: string;
    value: any;
}
export declare type SelectProps = {
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
export declare const DropdownSingleSelect: React.ForwardRefExoticComponent<SelectProps & React.RefAttributes<HTMLSelectElement>>;
//# sourceMappingURL=DropdownSingleSelect.d.ts.map