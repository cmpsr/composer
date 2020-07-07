import { ChangeEvent } from 'react';
declare type Props = {
    className?: string;
    ariaLabel?: string;
    name: string;
    placeholder: string;
    required?: boolean;
    type?: string;
    value?: string | number;
    iconPosition?: 'left' | 'right';
    onChange?: (event: ChangeEvent<HTMLInputElement>) => void;
    onClick?: () => void;
};
export declare const TextFieldIconButton: ({ className, ariaLabel, name, placeholder, onChange, required, type, onClick, iconPosition, value, }: Props) => JSX.Element;
export {};
//# sourceMappingURL=TextFieldIconButton.d.ts.map