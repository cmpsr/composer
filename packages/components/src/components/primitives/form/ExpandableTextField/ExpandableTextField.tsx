import React, { useEffect, useRef, forwardRef } from 'react';
import cn from 'classnames';
import { InputShapes } from 'components/primitives/form/TextField';
import { getExpandableTextFieldClasses } from 'utils/getExpandableTextFieldClasses';

export const EXPANDABLE_TEXT_FIELD_DEFAULT_TEST_ID = 'expandableTextField';

type Props = {
  testId?: string;
  className?: string;
  placeholder: string;
  onChange: (value: string) => void;
  shape?: InputShapes;
};

export const ExpandableTextField = forwardRef<HTMLInputElement, Props>(
  (
    {
      testId = EXPANDABLE_TEXT_FIELD_DEFAULT_TEST_ID,
      className,
      placeholder,
      onChange,
      shape = InputShapes.Rounded,
    }: Props,
    ref
  ) => {
    const expandableTextFieldRef = ref
      ? (ref as React.MutableRefObject<HTMLInputElement>)
      : useRef(null);
    const placeholderRef = useRef(null);

    useEffect(() => {
      const { current: currentExpandableTextField } = expandableTextFieldRef;
      const { current: currentPlaceholder } = placeholderRef;
      const onInput = () => {
        currentExpandableTextField.style.height = 'auto';
        currentExpandableTextField.style.height = `${currentExpandableTextField.scrollHeight}px`;
        currentExpandableTextField.style.overflowY = 'hidden';
        const hasContent = currentExpandableTextField.textContent.length > 0;
        currentPlaceholder.classList.add(
          `${hasContent ? 'invisible' : 'visible'}`
        );
        currentPlaceholder.classList.remove(
          `${hasContent ? 'visible' : 'invisible'}`
        );
      };
      currentExpandableTextField.addEventListener('input', onInput, false);
      return () =>
        currentExpandableTextField.removeEventListener('input', onInput, false);
    }, []);

    const {
      wrapperClasses,
      placeholderClasses,
      expandableTextFieldClasses,
    } = getExpandableTextFieldClasses();

    return (
      <div className={cn(className, wrapperClasses)}>
        <div ref={placeholderRef} className={placeholderClasses}>
          {placeholder}
        </div>
        <div
          data-testid={testId}
          className={cn(expandableTextFieldClasses, shape)}
          contentEditable
          ref={expandableTextFieldRef}
          onInput={(e) => onChange(e.currentTarget.textContent)}
        ></div>
      </div>
    );
  }
);
