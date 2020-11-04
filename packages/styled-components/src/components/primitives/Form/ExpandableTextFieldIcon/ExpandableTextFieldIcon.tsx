import React, { useState, useRef } from 'react';
import cn from 'classnames';
import { Props } from './ExpandableTextFieldIcon.types';
import { Shapes, IconPositions } from 'components/Components.types';
import {
  StyledWrapper,
  StyledIconWrapper,
  StyledIcon,
  StyledExpandableTextField,
} from './ExpandableTextFieldIcon.styled';

export const ExpandableTextFieldIcon = ({
  testId = 'expandableTextFieldIcon',
  className,
  expandableTextFieldClassName,
  placeholder,
  onChange,
  onClickIcon,
  shape = Shapes.Rounded,
  iconPosition,
  customCss,
  icon,
}: Props) => {
  const textFieldRef = useRef(null);
  const [isIconEnabled, setIconEnabled] = useState(false);

  const handleChange = (value: string) => {
    setIconEnabled(!!value);
    onChange(value);
  };

  const handleOnClickIcon = () => {
    onClickIcon();
    textFieldRef.current.textContent = '';
    const inputEvent = new Event('input', { bubbles: true });
    textFieldRef.current.dispatchEvent(inputEvent);
  };

  return (
    <StyledWrapper data-testid={testId} className={className}>
      <StyledIconWrapper onClick={handleOnClickIcon} className={iconPosition}>
        <StyledIcon className={cn({ enabled: isIconEnabled })}>
          {icon}
        </StyledIcon>
      </StyledIconWrapper>
      <StyledExpandableTextField
        css={customCss}
        className={cn(expandableTextFieldClassName, iconPosition)}
        placeholder={placeholder}
        onChange={handleChange}
        shape={shape}
        ref={textFieldRef}
      />
    </StyledWrapper>
  );
};

ExpandableTextFieldIcon.IconPositions = IconPositions;
ExpandableTextFieldIcon.Shapes = Shapes;
