import React, { ChangeEvent } from 'react';
export declare const RADIO_BUTTON_DEFAULT_TEST_ID = "radio";
declare type Props = {
    name?: string;
    value?: string;
    checked?: boolean;
    ariaLabel?: string;
    label?: string;
    disabled?: boolean;
    testId?: string;
    className?: string;
    onChange?: (event: ChangeEvent<HTMLInputElement>) => void;
};
export declare const RadioButton: React.ForwardRefExoticComponent<Props & React.RefAttributes<HTMLInputElement>>;
export {};
//# sourceMappingURL=RadioButton.d.ts.map