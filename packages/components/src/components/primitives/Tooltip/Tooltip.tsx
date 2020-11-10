import React, { useState } from 'react';
import cn from 'classnames';
import { usePopper } from 'react-popper';
import { StyledPopper, StyledArrow } from './Tooltip.styled';
import { Props, Places, BackgroundColors } from './Tooltip.types';

export const Tooltip = ({
  place,
  element,
  tooltip,
  className,
  backgroundColor,
  testId = 'tooltip',
}: Props) => {
  const [showPopper, setShowPopper] = useState(false);
  const [referenceElement, setReferenceElement] = useState(null);
  const [popperElement, setPopperElement] = useState(null);
  const [arrowElement, setArrowElement] = useState(null);
  const { styles, attributes } = usePopper(referenceElement, popperElement, {
    placement: place,
    modifiers: [
      {
        name: 'flip',
        enabled: false,
      },
      { name: 'arrow', options: { element: arrowElement } },
      {
        name: 'offset',
        options: {
          offset: [0, 10],
        },
      },
    ],
  });

  return (
    <>
      <a
        ref={setReferenceElement}
        onMouseEnter={() => setShowPopper(true)}
        onMouseLeave={() => setShowPopper(false)}
      >
        {element}
      </a>
      {showPopper && (
        <StyledPopper
          ref={setPopperElement}
          style={styles.popper}
          {...attributes.popper}
          className={cn(className, backgroundColor)}
          data-testid={testId}
        >
          {tooltip}
          <StyledArrow
            ref={setArrowElement}
            style={styles.arrow}
            data-placement={place}
            className={cn(backgroundColor, place)}
          />
        </StyledPopper>
      )}
    </>
  );
};

Tooltip.BackgroundColors = BackgroundColors;
Tooltip.Places = Places;
