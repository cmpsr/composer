import { ChangeEvent } from 'react';
import { InputShapes } from 'components/primitives/form/TextField';
declare type Props = {
    className?: string;
    value?: string;
    name: string;
    disabled?: boolean;
    isInvalid?: boolean;
    required?: boolean;
    placeholder: string;
    onChange?: (event: ChangeEvent<HTMLTextAreaElement>) => void;
    shape?: InputShapes;
};
export declare const TextArea: ({ className, value, name, disabled, isInvalid, required, placeholder, onChange, shape, }: Props) => JSX.Element;
export {};
//# sourceMappingURL=TextArea.d.ts.map