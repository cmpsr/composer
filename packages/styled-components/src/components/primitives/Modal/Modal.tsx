import React, { useEffect, useState } from 'react';
import cn from 'classnames';
import { Props } from './Modal.types';
import { Shapes } from 'components/Components.types';
import { Icon, close as Close } from 'components/primitives/Icon';
import {
  StyledOverlay,
  StyledButton,
  StyledCloseContainer,
  StyledIcon,
  StyledWrapper
} from './Modal.styled';

const stopEventPropagation = (e: React.MouseEvent) => {
  e.stopPropagation();
  e.nativeEvent.stopImmediatePropagation();
};

export const Modal = ({
  children,
  customCss,
  overlayCustomCss,
  shape = Shapes.Rectangle,
  isOpen = false,
  showCloseButton: closeButton = false,
  testId = 'modal'
}: Props) => {
  const [isModalOpen, setIsModalOpen] = useState(isOpen);

  const handleCloseModal = () => setIsModalOpen(false);

  useEffect(() => {
    setIsModalOpen(isOpen);
  }, [isOpen]);

  return isModalOpen ? (
    <StyledOverlay
      data-testid={testId}
      onClick={handleCloseModal}
      className={cn({ custom: overlayCustomCss })}
      css={overlayCustomCss}
    >
      <StyledWrapper
        className={cn(shape, { custom: customCss })}
        css={customCss}
        onClick={stopEventPropagation}
      >
        {closeButton && (
          <StyledCloseContainer>
            <StyledButton onClick={handleCloseModal}>
              <StyledIcon testId="close-button">
                <Close type={Icon.Types.Filled} />
              </StyledIcon>
            </StyledButton>
          </StyledCloseContainer>
        )}
        {children}
      </StyledWrapper>
    </StyledOverlay>
  ) : null;
};

Modal.Shapes = Shapes;
