import { FunctionComponent } from 'react';
export declare const DROPDOWN_DEFAULT_TEST_ID = "dropdown";
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
export declare const DropdownSingleSelect: FunctionComponent<SelectProps>;
//# sourceMappingURL=DropdownSingleSelect.d.ts.map