import React, { ReactNode, useState, useEffect } from 'react';
import cn from 'classnames';
import { Icon } from 'components/primitives';
import { close as Close } from 'components/primitives/Icon/icons/navigation';
import { getModalClasses } from 'utils/getModalClasses';
import ReactModal from 'react-modal';

export const MODAL_DEFAULT_TEST_ID = 'modal';

export enum ModalShapes {
  Rounded = 'rounded-modal-rounded',
  SemiRounded = 'rounded-modal-semi-rounded',
  Rectangle = 'rounded-modal-rectangle',
}

type Props = {
  className?: string;
  onClick?: () => void;
  shape?: ModalShapes;
  isOpen?: boolean;
  children?: ReactNode;
  closeButton?: boolean;
  testId?: string;
};

export const Modal = ({
  children,
  className,
  shape,
  isOpen = false,
  closeButton = false,
  testId = MODAL_DEFAULT_TEST_ID,
}: Props) => {
  const [show, setShow] = useState(isOpen);
  const { wrapper, overlay } = getModalClasses();

  useEffect(() => {
    setShow(isOpen);
  }, [isOpen]);

  return (
    <ReactModal
      className={cn(wrapper, className, shape)}
      isOpen={show}
      overlayClassName={overlay}
      ariaHideApp={false}
      data-testid={testId}
    >
      {closeButton && (
        <div className="flex justify-end">
          <button className="focus:outline-none" onClick={() => setShow(false)}>
            <Icon className="fill-current">
              <Close type="filled" />
            </Icon>
          </button>
        </div>
      )}
      {children}
    </ReactModal>
  );
};
