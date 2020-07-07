import { ChangeEvent } from 'react';
declare type Props = {
    className?: string;
    iconPosition?: 'left' | 'right';
    ariaLabel?: string;
    name: string;
    placeholder: string;
    required?: boolean;
    disabled?: boolean;
    type?: string;
    value?: string | number;
    onChange?: (event: ChangeEvent<HTMLInputElement>) => void;
};
export declare const TextFieldIcon: ({ className, iconPosition, ariaLabel, name, placeholder, onChange, required, disabled, type, value, }: Props) => JSX.Element;
export {};
//# sourceMappingURL=TextFieldIcon.d.ts.map