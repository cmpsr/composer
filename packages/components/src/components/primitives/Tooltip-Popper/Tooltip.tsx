import React, { useState } from 'react'
import { usePopper } from 'react-popper';
import './Tooltip.css';

export enum TooltipPlace {
  Left = 'left',
  Right = 'right',
  Bottom = 'bottom',
  Top = 'top',
}

type Props = {
  place?: TooltipPlace;
}

export const Tooltip = ({ place = TooltipPlace.Top }: Props) => {
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
  console.log(popperElement)
  return (
    <>
      <button type="button" ref={setReferenceElement} onClick={() => setShowPopper(!showPopper)}>
        element
      </button>
      {showPopper && (
        <div ref={setPopperElement} style={styles.popper} {...attributes.popper} className="bg-fill-primary-100 px-5 py-1 text-white rounded-sm">
          Tooltip
          <div ref={setArrowElement} style={styles.arrow} data-placement={place} className="arrow h-1 w-4 before:border-t-fill-primary-100 before:border-r-transparent before:border-l-transparent" />
        </div>
      )}
    </>
  )
}
