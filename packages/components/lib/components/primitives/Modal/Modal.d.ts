import { ReactNode } from 'react';
export declare const MODAL_DEFAULT_TEST_ID = "modal";
export declare enum ModalShapes {
    Rounded = "rounded-modal-rounded",
    SemiRounded = "rounded-modal-semi-rounded",
    Rectangle = "rounded-modal-rectangle"
}
declare type Props = {
    className?: string;
    onClick?: () => void;
    shape?: ModalShapes;
    isOpen?: boolean;
    children?: ReactNode;
    closeButton?: boolean;
    testId?: string;
};
export declare const Modal: ({ children, className, shape, isOpen, closeButton, testId, }: Props) => JSX.Element;
export {};
//# sourceMappingURL=Modal.d.ts.map