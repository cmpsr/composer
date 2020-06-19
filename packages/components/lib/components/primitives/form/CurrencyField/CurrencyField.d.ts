import React, { ChangeEvent } from 'react';
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
};
export declare const CurrencyField: React.ForwardRefExoticComponent<Props & React.RefAttributes<HTMLInputElement>>;
export {};
//# sourceMappingURL=CurrencyField.d.ts.map