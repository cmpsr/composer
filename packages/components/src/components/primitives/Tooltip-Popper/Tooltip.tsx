import React, { useState } from 'react'
import cn from 'classnames';
import { usePopper } from 'react-popper';
import { getStyles } from './Tooltip.styles';

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
}

export const Tooltip = ({ place = TooltipPlace.Top, element, tooltip, className }: Props) => {
  const [showPopper, setShowPopper] = useState(true);
  const [referenceElement, setReferenceElement] = useState(null);
  const [popperElement, setPopperElement] = useState(null);
  const [arrowElement, setArrowElement] = useState(null);
  const { styles, attributes } = usePopper(referenceElement, popperElement, {
    placement: place,
    modifiers: [{ name: 'arrow', options: { element: arrowElement } }, {
      name: "offset",
      options: {
        offset: [0, 10],
      },
    }],
  });
  const { arrowColor, defaultColor } = getStyles(place, backgroundColor);

  //before:border-t-fill-primary-100 before:border-r-transparent before:border-l-transparent h-1 w-4
  return (
    <>
      <a ref={setReferenceElement} onClick={() => setShowPopper(!showPopper)}>
        {element}
      </a>
      {showPopper && (
        <div ref={setPopperElement} style={styles.popper} {...attributes.popper} className={cn("bg-fill-primary-100 px-5 py-1 text-white rounded-sm", className)}>
          {tooltip}
          <div ref={setArrowElement} style={styles.arrow} data-placement={place} className="arrow" />
        </div>
      )}
    </>
  )
}
