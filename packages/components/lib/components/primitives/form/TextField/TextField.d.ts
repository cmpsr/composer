import React, { ChangeEvent } from 'react';
export declare enum InputShapes {
    Rounded = "rounded-input-rounded",
    SemiRounded = "rounded-input-semi-rounded",
    Rectangle = "rounded-input-rectangle"
}
export declare enum InputMode {
    Text = "text",
    Decimal = "decimal",
    Numeric = "numeric",
    Tel = "tel",
    Search = "search",
    Email = "email",
    Url = "url"
}
declare type Props = {
    className?: string;
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
    inputMode?: InputMode;
};
export declare const TextField: React.ForwardRefExoticComponent<Props & React.RefAttributes<HTMLInputElement>>;
export {};
//# sourceMappingURL=TextField.d.ts.map