import { ReactNode } from 'react';
import { InputShapes } from 'components/primitives/form/TextField';
export declare const EXPANDABLE_TEXT_FIELD_ICON_DEFAULT_TEST_ID = "expandableTextFieldIcon";
export declare enum ExpandableTextFieldIconPosition {
    Left = "left",
    Right = "right"
}
declare type Props = {
    testId?: string;
    className?: string;
    expandableTextFieldClassName?: string;
    placeholder: string;
    onChange: (value: string) => void;
    onClickIcon?: () => void;
    shape?: InputShapes;
    iconPosition?: ExpandableTextFieldIconPosition;
    icon: ReactNode;
};
export declare const ExpandableTextFieldIcon: ({ testId, className, expandableTextFieldClassName, placeholder, onChange, onClickIcon, shape, iconPosition, icon, }: Props) => JSX.Element;
export {};
//# sourceMappingURL=ExpandableTextFieldIcon.d.ts.map