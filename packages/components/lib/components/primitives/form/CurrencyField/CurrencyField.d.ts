import React, { ChangeEvent } from 'react';
import { InputMode } from 'components/primitives/form/TextField';
declare type Props = {
    className?: string;
    ariaLabel?: string;
    name: string;
    placeholder: string;
    required?: boolean;
    disabled?: boolean;
    type?: string;
    onChange?: (event: ChangeEvent<HTMLInputElement>) => void;
    invalid?: boolean;
    inputMode?: InputMode;
};
export declare const CurrencyField: React.ForwardRefExoticComponent<Props & React.RefAttributes<HTMLInputElement>>;
export {};
//# sourceMappingURL=CurrencyField.d.ts.map