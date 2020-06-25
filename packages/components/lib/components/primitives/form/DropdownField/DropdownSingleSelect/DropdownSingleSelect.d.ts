import React from 'react';
import { Option } from '../DropdownNativeSelect';
export declare const DROPDOWN_DEFAULT_TEST_ID = "dropdown";
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
export declare const DropdownSingleSelect: React.ForwardRefExoticComponent<Props & React.RefAttributes<HTMLSelectElement>>;
export {};
//# sourceMappingURL=DropdownSingleSelect.d.ts.map