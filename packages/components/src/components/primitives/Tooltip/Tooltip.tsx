import React, { useState } from 'react';
import cn from 'classnames';
import { usePopper } from 'react-popper';
import { getStyles } from './Tooltip.styles';

export enum BackgroundColor {
  primary900 = 'bg-fill-primary-900',
  primary100 = 'bg-fill-primary-100',
}

export enum TooltipPlace {
  Left = 'left',
  Right = 'right',
  Bottom = 'bottom',
  Top = 'top',
}

type Props = {
  place?: TooltipPlace;
  element: React.ReactNode;
  tooltip: React.ReactNode;
  className?: string;
  backgroundColor?: string;
};

export const Tooltip = ({
  place = TooltipPlace.Top,
  element,
  tooltip,
  className,
  backgroundColor = BackgroundColor.primary900,
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
  const { arrowClasses, defaultColor } = getStyles(place, backgroundColor);

  return (
    <>
      <a ref={setReferenceElement} onClick={() => setShowPopper(!showPopper)}>
        {element}
      </a>
      {showPopper && (
        <div
          ref={setPopperElement}
          style={styles.popper}
          {...attributes.popper}
          className={cn(
            defaultColor,
            className
          )}
        >
          {tooltip}
          <div
            ref={setArrowElement}
            style={styles.arrow}
            data-placement={place}
            className={cn(arrowClasses, "arrow")}
          />
        </div>
      )}
    </>
  );
};
