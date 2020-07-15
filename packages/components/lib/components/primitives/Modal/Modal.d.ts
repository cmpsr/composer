import { ReactNode } from 'react';
export declare enum ModalShapes {
    Rounded = "rounded-modal-rounded",
    SemiRounded = "rounded-modal-semi-rounded",
    Rectangle = "rounded-modal-rectangle"
}
declare type Props = {
    className?: string;
    overlayClassName?: string;
    onClick?: () => void;
    shape?: ModalShapes;
    isOpen?: boolean;
    children?: ReactNode;
    closeButton?: boolean;
};
export declare const Modal: ({ children, className, overlayClassName, shape, isOpen, closeButton, }: Props) => JSX.Element;
export {};
//# sourceMappingURL=Modal.d.ts.map