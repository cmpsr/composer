import React, { useState, ReactNode, useRef } from 'react';
import cn from 'classnames';
import { InputShapes } from 'components/primitives/form/TextField';
import { ExpandableTextField } from 'components/primitives/form/ExpandableTextField';
import { getExpandableTextFieldIconClasses } from 'utils/getExpandableTextFieldIconClasses';
import { Icon } from 'components/primitives/Icon';

export const EXPANDABLE_TEXT_FIELD_ICON_DEFAULT_TEST_ID =
  'expandableTextFieldIcon';

export enum ExpandableTextFieldIconPosition {
  Left = 'left',
  Right = 'right',
}

type Props = {
  testId?: string;
  className?: string;
  expandableTextFieldClassName?: string;
  placeholder: string;
  onChange: (value: string) => void;
  onClickIcon?: () => void;
  shape?: InputShapes;
  iconPosition?: ExpandableTextFieldIconPosition;
  icon: ReactNode;
};

export const ExpandableTextFieldIcon = ({
  testId = EXPANDABLE_TEXT_FIELD_ICON_DEFAULT_TEST_ID,
  className,
  expandableTextFieldClassName,
  placeholder,
  onChange,
  onClickIcon,
  shape = InputShapes.Rounded,
  iconPosition,
  icon,
}: Props) => {
  const textFieldRef = useRef(null);
  const [isIconEnabled, setIconEnabled] = useState(false);
  const {
    wrapperClasses,
    iconWrapperClasses,
    iconClasses,
    expandableTextFieldClasses,
  } = getExpandableTextFieldIconClasses(iconPosition, isIconEnabled);
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
    <div data-testid={testId} className={cn(className, wrapperClasses)}>
      <div onClick={handleOnClickIcon} className={iconWrapperClasses}>
        <Icon className={iconClasses}>{icon}</Icon>
      </div>
      <ExpandableTextField
        className={cn(expandableTextFieldClassName, expandableTextFieldClasses)}
        placeholder={placeholder}
        onChange={handleChange}
        shape={shape}
        ref={textFieldRef}
      />
    </div>
  );
};
