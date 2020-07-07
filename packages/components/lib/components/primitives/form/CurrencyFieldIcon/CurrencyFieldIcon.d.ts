import React, { ChangeEvent } from 'react';
import { InputMode } from 'components/primitives/form/TextField';
declare type Props = {
    className?: string;
    iconPosition?: 'left' | 'right';
    ariaLabel?: string;
    name: string;
    placeholder: string;
    required?: boolean;
    disabled?: boolean;
    type?: string;
    icon: React.ReactNode;
    onChange?: (event: ChangeEvent<HTMLInputElement>) => void;
    invalid?: boolean;
    inputMode?: InputMode;
};
export declare const CurrencyFieldIcon: React.ForwardRefExoticComponent<Props & React.RefAttributes<HTMLInputElement>>;
export {};
//# sourceMappingURL=CurrencyFieldIcon.d.ts.map