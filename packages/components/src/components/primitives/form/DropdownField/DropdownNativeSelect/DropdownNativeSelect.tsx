import React, { forwardRef, useState } from 'react';
import cn from 'classnames';
import { Icon } from 'components/primitives';
import { expand_more as ExpandMore } from 'components/primitives/Icon/icons/navigation';
import { getDropdownSingleSelectClasses } from 'utils/getDropdownSingleSelectClasses';
import { SelectProps } from '../DropdownSingleSelect';

export const DROPDOWN_NATIVE_DEFAULT_TEST_ID = 'dropdown-native';

export const DropdownNativeSelect = forwardRef<HTMLSelectElement, SelectProps>(
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
    }: SelectProps,
    ref
  ) => {
    const defaultValue = initialSelectedOption?.value;
    const [itemSelected, setItemSelected] = useState(defaultValue || '');

    const {
      selectWrapper,
      selectClasses,
      selectTextClasses,
      selectDisabledClasses,
      iconWrapper,
      icon,
    } = getDropdownSingleSelectClasses(disabled, invalid, itemSelected);

    const handleOnChange = (event) => {
      const index = event.target.selectedIndex;
      const value = event.target.value;

      setItemSelected(value);
      return onItemChange(options[index - 1]);
    };

    return (
      <div className={selectWrapper}>
        <select
          value={itemSelected}
          className={cn(
            selectClasses,
            selectTextClasses,
            selectDisabledClasses,
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
            <option key={index} value={item.value}>
              {item.label}
            </option>
          ))}
        </select>
        <div className={iconWrapper}>
          <Icon className={icon}>
            <ExpandMore type="filled" />
          </Icon>
        </div>
      </div>
    );
  }
);
