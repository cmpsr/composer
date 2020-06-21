import React, { ChangeEvent } from 'react';
export declare enum InputShapes {
    Rounded = "rounded-input-rounded",
    SemiRounded = "rounded-input-semi-rounded",
    Rectangle = "rounded-input-rectangle"
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
};
export declare const TextField: React.ForwardRefExoticComponent<Props & React.RefAttributes<HTMLInputElement>>;
export {};
//# sourceMappingURL=TextField.d.ts.map