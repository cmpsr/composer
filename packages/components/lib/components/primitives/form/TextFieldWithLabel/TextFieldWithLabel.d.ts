import React, { ChangeEvent } from 'react';
import { InputShapes } from 'components/primitives/form/TextField';
declare type Props = {
    textFieldClassName?: string;
    labelClassName?: string;
    shape?: InputShapes;
    ariaLabel?: string;
    name: string;
    placeholder: string;
    required?: boolean;
    disabled?: boolean;
    invalid?: boolean;
    type?: string;
    maxLength?: number;
    onChange?: (event: ChangeEvent<HTMLInputElement>) => void;
    label: string;
};
export declare const TextFieldWithLabel: React.ForwardRefExoticComponent<Props & React.RefAttributes<HTMLInputElement>>;
export {};
//# sourceMappingURL=TextFieldWithLabel.d.ts.map