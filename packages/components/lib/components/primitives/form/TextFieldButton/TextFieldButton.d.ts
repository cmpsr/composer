import { ChangeEvent } from 'react';
declare type Props = {
    className?: string;
    ariaLabel?: string;
    name: string;
    placeholder: string;
    required?: boolean;
    type?: string;
    buttonLabel?: string;
    onChange?: (event: ChangeEvent<HTMLInputElement>) => void;
    onClick?: () => void;
};
export declare const TextFieldButton: ({ className, ariaLabel, name, placeholder, onChange, required, type, onClick, buttonLabel, }: Props) => JSX.Element;
export {};
//# sourceMappingURL=TextFieldButton.d.ts.map