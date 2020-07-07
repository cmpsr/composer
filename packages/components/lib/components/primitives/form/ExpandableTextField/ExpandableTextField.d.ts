import React from 'react';
import { InputShapes } from 'components/primitives/form/TextField';
export declare const EXPANDABLE_TEXT_FIELD_DEFAULT_TEST_ID = "expandableTextField";
declare type Props = {
    testId?: string;
    className?: string;
    placeholder: string;
    onChange: (value: string) => void;
    shape?: InputShapes;
};
export declare const ExpandableTextField: React.ForwardRefExoticComponent<Props & React.RefAttributes<HTMLInputElement>>;
export {};
//# sourceMappingURL=ExpandableTextField.d.ts.map