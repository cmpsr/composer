import React, { forwardRef, useState } from 'react';
import cn from 'classnames';
import { Icon } from 'components/primitives';
import { expand_more as ExpandMore } from 'components/primitives/Icon/icons/navigation';
import { getDropdownSingleSelectClasses } from 'utils/getDropdownSingleSelectClasses';

export const DROPDOWN_NATIVE_DEFAULT_TEST_ID = 'dropdown_native';

export interface Option {
  label: any;
  value: any;
}

type Props = {
  className?: string;
  options?: Option[];
  placeHolder?: string;
  initialSelectedOption?: Option;
  onItemChange?: (item: Option) => void;
  testId?: string;
  disabled?: boolean;
  name?: string;
  invalid?: boolean;
};

export const DropdownNativeSelect = forwardRef<HTMLSelectElement, Props>(
  (
    {
      className,
      options,
      placeHolder = 'Select an item',
      initialSelectedOption,
      onItemChange,
      testId = DROPDOWN_NATIVE_DEFAULT_TEST_ID,
      disabled = false,
      name = 'dropdown',
      invalid,
    }: Props,
    ref
  ) => {
    const defaultValue = initialSelectedOption && initialSelectedOption.value;
    const [itemSelected, setItemSelected] = useState(defaultValue || '');

    const {
      selectWrapper,
      selectClasses,
      selectTextClasses,
      selectFocusClasses,
      selectDisabledClasses,
      selectErrorClasses,
      iconWrapper,
      icon,
    } = getDropdownSingleSelectClasses(disabled, invalid, itemSelected);

    const handleOnChange = (event) => {
      const index = event.target.selectedIndex;
      const label = event.target[index].label;
      event.target.className += ' !text-fill-forms-filled';

      setItemSelected(event.target.value);

      return onItemChange({
        label: label,
        value: event.target.value,
      });
    };

    return (
      <div className={selectWrapper}>
        <select
          value={itemSelected}
          className={cn(
            selectClasses,
            selectTextClasses,
            selectFocusClasses,
            selectDisabledClasses,
            selectErrorClasses,
            className
          )}
          onChange={handleOnChange}
          name={name}
          disabled={disabled}
          data-testid={testId}
          ref={ref}
        >
          <option value="">{placeHolder}</option>
          {options.map((item, index) => (
            <option key={`${index}${item.value}`} value={item.value}>
              {item.label}
            </option>
          ))}
        </select>
        <div className={iconWrapper}>
          <Icon width={24} height={24} className={icon}>
            <ExpandMore type="filled" />
          </Icon>
        </div>
      </div>
    );
  }
);
