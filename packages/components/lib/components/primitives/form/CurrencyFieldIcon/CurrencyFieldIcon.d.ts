import React, { ChangeEvent } from 'react';
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
};
export declare const CurrencyFieldIcon: React.ForwardRefExoticComponent<Props & React.RefAttributes<HTMLInputElement>>;
export {};
//# sourceMappingURL=CurrencyFieldIcon.d.ts.map