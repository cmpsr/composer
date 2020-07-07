import React, { ChangeEvent } from 'react';
import { InputShapes } from 'components/primitives/form/TextField';
export declare enum IconPosition {
    Left = "left-0 pl-3",
    Right = "right-0 pr-3"
}
declare type Props = {
    className?: string;
    shape?: InputShapes;
    iconPosition?: IconPosition;
    ariaLabel?: string;
    name: string;
    placeholder: string;
    required?: boolean;
    disabled?: boolean;
    invalid?: boolean;
    type?: string;
    onChange?: (event: ChangeEvent<HTMLInputElement>) => void;
};
export declare const SearchField: React.ForwardRefExoticComponent<Props & React.RefAttributes<HTMLInputElement>>;
export {};
//# sourceMappingURL=SearchField.d.ts.map