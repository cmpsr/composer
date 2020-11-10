import React, { useEffect, useRef, forwardRef } from 'react';
import { Props, Type } from './ExpandableTextField.types';
import { Shapes } from 'components/Components.types';
import {
  StyledWrapper,
  StyledPlaceholder,
  StyledExpandable,
} from './ExpandableTextField.styled';

export const ExpandableTextField: Type = forwardRef<HTMLInputElement, Props>(
  (
    {
      testId = 'expandableTextField',
      className,
      placeholder,
      onChange,
      shape,
      customCss,
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
        currentPlaceholder.style.visibility = hasContent ? 'hidden' : 'visible';
      };
      currentExpandableTextField.addEventListener('input', onInput, false);
      return () =>
        currentExpandableTextField.removeEventListener('input', onInput, false);
    }, []);

    return (
      <StyledWrapper css={customCss} className={className}>
        <StyledPlaceholder ref={placeholderRef}>
          {placeholder}
        </StyledPlaceholder>
        <StyledExpandable
          data-testid={testId}
          className={shape}
          contentEditable
          ref={expandableTextFieldRef}
          onInput={(e) => onChange(e.currentTarget.textContent)}
        ></StyledExpandable>
      </StyledWrapper>
    );
  }
);

ExpandableTextField.Shapes = Shapes;
